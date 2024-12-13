<script setup lang="ts">
import axios from "axios"
import { hydrate, onMounted, ref,h } from "vue"
import { MyButton } from "./bundle"

const a = ref()

async function re() {
  const html = await axios.get('http://localhost:3000/html')
  return html.data
}



onMounted(async ()=>{
  const html  =await re();
  (document.getElementById("aa") as any).innerHTML +=html;
})

</script>

<template>
  <div id="aa" ref="a">
    <MyButton />
  </div>
</template>
