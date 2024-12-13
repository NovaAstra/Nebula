import { h,createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { MyButton } from "./dist/bundle"



const server = Bun.serve({
  async fetch(req) {
    const app = createSSRApp(MyButton)
    let html = await renderToString(app)
    
    const url = new URL(req.url);

    if (url.pathname === '/html') return new Response(html, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "text/html",
      },
    });

    return new Response("text", {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Listening on ${server.url}`);