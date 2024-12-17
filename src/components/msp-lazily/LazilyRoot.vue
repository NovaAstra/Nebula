<script lang="ts" setup>
import { onMounted, onUnmounted, provide, useTemplateRef } from "vue";
import { useIntersectionObserver } from "./useIntersectionObserver"
import { LAZILY_INJECTION_KEY, LazilyProps } from "./type"

defineOptions({
  name: "MspLazilyRoot"
})

const props = defineProps<LazilyProps>()

const template = useTemplateRef<HTMLElement>("lazily-root")

const observer = useIntersectionObserver({
  rootMargin: props.margin,
  threshold: props.threshold
})

onMounted(() => {
  observer.observe(template.value)
})

onUnmounted(() => {
  observer.dispose()
})

provide(LAZILY_INJECTION_KEY, {
  observer
})
</script>

<template>
  <div class="lazily-root" ref="lazily-root">
    <slot />
  </div>
</template>