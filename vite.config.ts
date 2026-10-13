import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { protectedContent } from './tools/protectedContent'

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
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mermaid: ['mermaid'],
        },
      },
      treeshake: true,
    },
  },
}))
