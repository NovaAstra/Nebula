import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from "@vitejs/plugin-vue-jsx"
import path from 'path'

export default defineConfig({
  plugins: [vue(), jsx()],
  base: `/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },

    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    port: 8082,
    cors: true,
  }
})
