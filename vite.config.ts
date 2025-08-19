import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './FracttalAiButton': './src/Mini/FracttalAi.tsx',
        './FracttalAiMain': './src/layouts/Main.tsx'
      },
      shared: ['react', 'react-dom', 'react-redux']
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
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
