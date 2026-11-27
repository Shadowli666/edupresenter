import type { Plugin } from 'vite';
import ts from 'typescript';
import { webcrypto, randomBytes } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Plugin de contenido protegido (solo en `vite build`; en `npm run dev` todo va en claro).
 *
 * Reescribe los módulos de `data/**` ANTES de empaquetarlos, de modo que lo que
 * no debe ser público nunca llegue en claro al JS publicado:
 *   - `notes` (notas del docente)  -> cifradas con el código de la clave 'notas'
 *   - `lock: '<clave>'` (evaluaciones) -> `contentHtml` cifrado con el código de esa clave
 *
 * Códigos: `unlock-codes.local` (JSON {clave: código}) o variable de entorno
 * UNLOCK_CODES. Si falta alguno:
 *   - en local se GENERA uno aleatorio y se guarda en `unlock-codes.local`;
 *   - en CI (variable CI) el build NO publica el contenido sin cifrar: queda
 *     "no disponible" (falla cerrado) y se avisa.
 *
 * Ver AGENTS.md ("Notas y evaluaciones protegidas").
 */

/** Normalización del código; debe coincidir con lib/crypto.ts. */
const normalize = (code: string) => code.trim().toUpperCase();

export const NOTES_KEY = 'notas';
const CODES_FILE = 'unlock-codes.local';
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // sin 0/O/1/I/L

const newCode = () => {
  const bytes = randomBytes(12);
  const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
  return `${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
};

export function loadCodes(root: string): Record<string, string> {
  const file = path.join(root, CODES_FILE);
  let raw = process.env.UNLOCK_CODES;
  if (!raw && fs.existsSync(file)) raw = fs.readFileSync(file, 'utf8');
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { throw new Error(`UNLOCK_CODES / ${CODES_FILE} no es JSON válido`); }
}

/**
 * Una sola derivación PBKDF2 por clave (grupo): todas las piezas de un grupo
 * comparten salt y llave; cada pieza lleva su propio IV aleatorio. Así el
 * navegador deriva la llave una vez por código en lugar de una por diapositiva.
 */
const groupKeys = new Map<string, { salt: Buffer; key: Promise<webcrypto.CryptoKey> }>();

function groupKey(group: string, code: string) {
  let g = groupKeys.get(group);
  if (!g) {
    const salt = randomBytes(16);
    const subtle = webcrypto.subtle;
    const key = subtle
      .importKey('raw', new TextEncoder().encode(normalize(code)), 'PBKDF2', false, ['deriveKey'])
      .then((material) => subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' },
        material, { name: 'AES-GCM', length: 256 }, false, ['encrypt']
      ));
    g = { salt, key };
    groupKeys.set(group, g);
  }
  return g;
}

async function seal(group: string, payload: Record<string, string>, code: string) {
  const { salt, key } = groupKey(group, code);
  const iv = randomBytes(12);
  const data = await webcrypto.subtle.encrypt({ name: 'AES-GCM', iv }, await key, new TextEncoder().encode(JSON.stringify(payload)));
  return { s: salt.toString('base64'), i: iv.toString('base64'), d: Buffer.from(data).toString('base64') };
}

interface Edit { start: number; end: number; text: string }

export function protectedContent(options: { root: string }): Plugin {
  const codes = loadCodes(options.root);
  const isCI = !!process.env.CI;
  const warned = new Set<string>();
  const file = path.join(options.root, CODES_FILE);

  /** Devuelve el código de una clave; en local lo genera y lo guarda si no existía. */
  const codeFor = (key: string, warn: (m: string) => void): string | null => {
    if (codes[key]) return codes[key];
    if (isCI || process.env.UNLOCK_CODES) {
      if (!warned.has(key)) { warned.add(key); warn(`Sin código para '${key}': su contenido queda NO DISPONIBLE. Define UNLOCK_CODES.`); }
      return null;
    }
    codes[key] = newCode();
    fs.writeFileSync(file, JSON.stringify(codes, null, 2) + '\n');
    warn(`Código nuevo generado para '${key}' en ${CODES_FILE}: ${codes[key]}`);
    return codes[key];
  };

  return {
    name: 'edupresenter-protected-content',
    enforce: 'pre',
    apply: 'build',
    async transform(code, id) {
      const src = id.split('?')[0].replace(/\\/g, '/');
      if (!/\/data\/.+\.ts$/.test(src)) return null;

      const warn = (m: string) => this.warn(m);
      const sf = ts.createSourceFile(src, code, ts.ScriptTarget.Latest, true);
      const edits: Edit[] = [];
      const pending: Array<Promise<void>> = [];

      const propName = (p: ts.ObjectLiteralElementLike) =>
        ts.isPropertyAssignment(p) && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) ? p.name.text : null;

      const visit = (node: ts.Node) => {
        if (ts.isObjectLiteralExpression(node)) {
          const props = new Map(node.properties.map((p) => [propName(p), p] as const));
          if (props.has('contentHtml')) {
            // Falla CERRADO: si no se puede garantizar el cifrado, el build se detiene.
            const where = `${src}:${sf.getLineAndCharacterOfPosition(node.getStart()).line + 1}`;
            if (node.properties.some((p) => ts.isSpreadAssignment(p) || ts.isShorthandPropertyAssignment(p))) {
              throw new Error(`${where}: una diapositiva usa spread o propiedades abreviadas; escribe sus propiedades en forma literal (clave: valor).`);
            }
            const notesProp = props.get('notes');
            if (notesProp && !(ts.isPropertyAssignment(notesProp) && ts.isStringLiteralLike(notesProp.initializer))) {
              throw new Error(`${where}: 'notes' debe ser texto literal (sin variables ni \${}).`);
            }
            const lockProp = props.get('lock');
            if (lockProp && !(ts.isPropertyAssignment(lockProp) && ts.isStringLiteralLike(lockProp.initializer))) {
              throw new Error(`${where}: 'lock' debe ser un texto literal (ej. lock: 'eval-corte-1').`);
            }
            // 1. Notas del docente -> cifradas con la clave 'notas'
            const notes = props.get('notes');
            if (notes && ts.isPropertyAssignment(notes)) {
              const text = ts.isStringLiteralLike(notes.initializer) ? notes.initializer.text : null;
              if (text === null) throw new Error(`${src}: 'notes' debe ser texto literal (sin \${})`);
              const c = codeFor(NOTES_KEY, warn);
              if (!c) edits.push({ start: notes.getFullStart(), end: notes.end, text: ' notesSealed: null' });
              else pending.push(seal(NOTES_KEY, { notes: text }, c).then((s) => {
                edits.push({ start: notes.getFullStart(), end: notes.end, text: ` notesSealed: ${JSON.stringify(s)}` });
              }));
            }
            // 2. Evaluaciones bloqueadas -> contenido cifrado con el código de su clave
            const lock = props.get('lock');
            const content = props.get('contentHtml')!;
            if (lock && ts.isPropertyAssignment(lock) && ts.isStringLiteralLike(lock.initializer) && ts.isPropertyAssignment(content)) {
              const key = lock.initializer.text;
              const html = ts.isStringLiteralLike(content.initializer) ? content.initializer.text : null;
              if (html === null) throw new Error(`${src}: la diapositiva bloqueada '${key}' usa una plantilla con \${}; usa texto literal`);
              const c = codeFor(key, warn);
              if (!c) edits.push({ start: content.getFullStart(), end: content.end, text: " contentHtml: '', sealed: null" });
              else pending.push(seal(key, { contentHtml: html }, c).then((s) => {
                edits.push({ start: content.getFullStart(), end: content.end, text: ` contentHtml: '', sealed: ${JSON.stringify(s)}` });
              }));
            }
          }
        }
        ts.forEachChild(node, visit);
      };
      visit(sf);
      await Promise.all(pending);

      if (!edits.length) return null;
      let out = code;
      edits.sort((a, b) => b.start - a.start).forEach((e) => { out = out.slice(0, e.start) + e.text + out.slice(e.end); });
      return { code: out, map: null };
    },
  };
}
