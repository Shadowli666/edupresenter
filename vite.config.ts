import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { protectedContent } from './tools/protectedContent'
import fs from 'node:fs'
import path from 'node:path'

// Mermaid se sirve como archivo estático (ver lib/mermaid.ts): empaquetarlo
// sumaba ~3 000 módulos y la mayor parte del tiempo de build.
function ensureMermaidVendor() {
  const src = path.resolve('node_modules/mermaid/dist/mermaid.min.js')
  const dest = path.resolve('public/vendor/mermaid.min.js')
  if (!fs.existsSync(src)) return
  if (!fs.existsSync(dest) || fs.statSync(dest).mtimeMs < fs.statSync(src).mtimeMs) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
  }
}
ensureMermaidVendor()

// https://vitejs.dev/config/
//   npm run dev     -> todo en claro (para editar contenido)
//   npm run build   -> las notas del docente y las evaluaciones (`lock`) salen CIFRADAS
//                      (ver AGENTS.md y tools/protectedContent.ts)
export default defineConfig(({ command }) => ({
  // En el build de producción se usan rutas relativas para que el mismo `dist/`
  // funcione servido desde la raíz (Vercel, preview local) o desde un
  // subdirectorio (GitHub Pages, hotspot). En desarrollo se mantiene `/`.
  base: command === 'build' ? './' : '/',
  plugins: [react(), protectedContent({ root: process.cwd() })],
  server: {
    host: true, // escuchar en 0.0.0.0 para que los estudiantes entren desde el hotspot
    // El servidor de desarrollo sirve el proyecto; que no entregue los códigos.
    fs: { deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', 'unlock-codes.local', 'unlock-codes.*.json'] },
  },
  build: {
    target: 'es2019',
    cssTarget: 'chrome61',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1200,
    reportCompressedSize: false, // calcular gzip de cada chunk no aporta y cuesta segundos
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react';
        },
      },
      treeshake: true,
    },
  },
}))
