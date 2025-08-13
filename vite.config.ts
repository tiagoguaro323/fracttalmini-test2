import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js", // 🔹 fijo para prod y dev
      exposes: {
        './Button2': './src/Mini/Button.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    // ⚠ Solo en build, mantener ruta fija y sin hash
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    cors: true,
    // 🔹 Esto es clave para que remoteEntry.js se sirva bien en dev
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  preview: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
