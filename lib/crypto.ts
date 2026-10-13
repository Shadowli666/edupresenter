import { Sealed } from '../types';

const b64 = (s: string): Uint8Array<ArrayBuffer> => {
  const bin = atob(s);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
};

/** Normaliza el código para que "eval-1 " y "EVAL-1" sean el mismo. Igual que en tools/studentContent.ts. */
export const normalizeCode = (code: string) => code.trim().toUpperCase();

// Las piezas de un mismo grupo comparten salt: la llave se deriva una sola vez por (código, salt).
const keyCache = new Map<string, Promise<CryptoKey>>();

function deriveKey(code: string, saltB64: string): Promise<CryptoKey> {
  const id = `${normalizeCode(code)}|${saltB64}`;
  let key = keyCache.get(id);
  if (!key) {
    key = crypto.subtle
      .importKey('raw', new TextEncoder().encode(normalizeCode(code)), 'PBKDF2', false, ['deriveKey'])
      .then((material) => crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: b64(saltB64), iterations: 120000, hash: 'SHA-256' },
        material,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      ));
    keyCache.set(id, key);
  }
  return key;
}

export interface SealedPayload { contentHtml?: string; notes?: string }

/** Devuelve el contenido descifrado, o null si el código es incorrecto. */
export async function openSealed(sealed: Sealed, code: string): Promise<SealedPayload | null> {
  try {
    const key = await deriveKey(code, sealed.s);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(sealed.i) }, key, b64(sealed.d));
    return JSON.parse(new TextDecoder().decode(plain)) as SealedPayload;
  } catch {
    return null; // GCM falla la autenticación con un código incorrecto
  }
}
