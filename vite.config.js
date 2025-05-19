import { fileURLToPath, URL } from 'node:url'
import {join, parse, resolve} from 'path' 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { nodePolyfills } from 'vite-plugin-node-polyfills' 

// https://vite.dev/config/
export default defineConfig({
  worker: {
    format: 'es',
  },
  server: {
    //sourcemap: true,
  },
  build: {
    lib: {
        entry: './src/main.js',
        name: 'my-library',
        format: 'es',
    },
    minify: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    cssCodeSplit: false,    // 전체 프로젝트의 모든 CSS가 단일 CSS 파일로
  },
  plugins: [
    vue(),
    // vueDevTools(),
    nodePolyfills({ 
      // Whether to polyfill `node:` protocol imports. 
      protocolImports: true, 
    }), 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'buffer', // Buffer 폴리필 추가
    },
  },
})
