//@ts-nocheck

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from "@vitejs/plugin-vue-jsx"
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    (function () {
      let basePath = ''
      return {
        name: "vite:micro-app",
        apply: 'build',
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`
        },
        // renderChunk(code, chunk) {
        //   if (chunk.fileName.endsWith('.js')) {
        //     code = code.replace(/(from|import\()(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
        //       return all.replace($3, new URL($3, basePath))
        //     })
        //   }
        //   return code
        // },
        // writeBundle 钩子可以拿到完整处理后的文件，但已经无法修改
        writeBundle (options, bundle) {
          for (const chunkName in bundle) {
            if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
              const chunk = bundle[chunkName]
              if (chunk.fileName && chunk.fileName.endsWith('.js')) {
                chunk.code = chunk.code.replace(/(from|import\()(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
                  return all.replace($3, new URL($3, basePath))
                })
                const fullPath = join(options.dir, chunk.fileName)
                writeFileSync(fullPath, chunk.code)
              }
            }
          }
        },
        // generateBundle 执行时import() 还是 q(()=>import("./page2.cdecf1fd.js"),"__VITE_PRELOAD__")
        // generateBundle (options, bundle) {
        //   for (const chunkName in bundle) {
        //     if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
        //       const chunk = bundle[chunkName]
        //       if (chunk.fileName && chunk.fileName.endsWith('.js')) {
        //         chunk.code = chunk.code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
        //           return all.replace($3, new URL($3, basePath))
        //         })

        //         if (chunk.fileName.includes('index')) {
        //           console.log(22222222, chunk.code)
        //         }
        //       }
        //     }
        //   }
        // },
      }
    })() as any,
  ],
  base: `/widget/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },

    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    port: 8082,
    cors: true,
  },
  
})
