import { createSSRApp,h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {MyButton} from "./dist/bundle"


// const app = createSSRApp(MyButton)

renderToString(h(MyButton)).then((html) => {
  console.log(html)
})