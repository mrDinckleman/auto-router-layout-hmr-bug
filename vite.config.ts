import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Layouts({
      defaultLayout: 'LayoutDefault',
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
