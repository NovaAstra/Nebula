//@ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter, createWebHistory, RouterHistory, Router } from 'vue-router'
// ----------分割线---umd模式------两种模式任选其一-------------- //
let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount () {
  history = createWebHistory()
  router = createRouter({
    history,
    routes,
  })

  app = createApp(App)
  console.log(app)
  app.use(router)
  app.mount('#widget-app')

  console.log('微应用child-vite渲染了')


  // fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.unmount()
  history?.destroy()
  // 卸载所有数据监听函数
  window.eventCenterForAppNameVite?.clearDataListener()
  app = null
  router = null
  history = null
  console.log('微应用child-vite卸载了')
}
// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  // @ts-ignore
  window['micro-app-appname-vite'] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

