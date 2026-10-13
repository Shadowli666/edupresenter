#!/usr/bin/env node
// Muestra los códigos de desbloqueo vigentes (notas del docente y evaluaciones).
//   npm run codes            -> tabla legible
//   npm run codes -- --json  -> JSON (para agentes)
// Los códigos viven en `unlock-codes.local` (ignorado por git) o en la variable UNLOCK_CODES.
import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'unlock-codes.local');
const raw = process.env.UNLOCK_CODES || (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
if (!raw) {
  console.error('Aún no hay códigos. Se generan solos en el primer `npm run build` (archivo unlock-codes.local).');
  process.exit(1);
}
const codes = JSON.parse(raw);
if (process.argv.includes('--json')) console.log(JSON.stringify(codes, null, 2));
else for (const [k, v] of Object.entries(codes)) console.log(`${k.padEnd(18)} ${v}`);
