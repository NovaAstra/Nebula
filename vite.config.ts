import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})

// import { defineConfig } from 'vite'
// import { resolve } from 'path'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   build: {
//     lib: {
//       entry: resolve(__dirname, './demo/index.ts'),
//       name: 'Bundle',
//       fileName: 'bundle'
//     },
//     rollupOptions: {
//       // external: ['vue'],
//       output: {
//         globals: {
//           vue: 'Vue'
//         }
//       }
//     }
//   },
//   plugins: [vue()],
// })
