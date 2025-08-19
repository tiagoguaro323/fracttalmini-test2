import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// import fs from 'fs'

// function forceCssAsset() {
//   return {
//     name: 'force-css-asset',
//     generateBundle(_, bundle) {
//       // 1️⃣ Leemos el CSS fuente de tu proyecto
//       const cssPath = path.resolve(__dirname, 'src/index.css')
//       let cssContent = ''
//       if (fs.existsSync(cssPath)) {
//         cssContent = fs.readFileSync(cssPath, 'utf-8')
//       }

//       // 2️⃣ Inyectamos un asset styles.css en el bundle final
//       bundle['assets/styles.css'] = {
//         type: 'asset',
//         fileName: 'assets/styles.css',
//         source: cssContent
//       }
//     }
//   }
// }

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // forceCssAsset(), // ⬅️ aquí lo forzamos
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Button3': './src/Mini/Button.tsx',
      },
      shared: ['react', 'react-dom', 'tailwindcss']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
         assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles.css'; // 🔹 Fuerza el nombre exacto
          }
          return '[name][extname]';
        }
      }
    }
  },
  server: {
    cors: true,
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
