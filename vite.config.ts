import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // escuchar en 0.0.0.0 para que los estudiantes entren desde el hotspot
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
})