<script lang="ts">
import { BaseLazilyProps } from "./type"

export interface LazilyRootProps extends BaseLazilyProps { }
</script>

<script lang="ts" setup>
import { onUnmounted, provide, useTemplateRef } from "vue";
import { useIntersectionObserver } from "./useIntersectionObserver"
import { LAZILY_INJECTION_KEY } from "./type"

defineOptions({
  name: "MspLazilyRoot"
})

const { tag = 'div', margin, threshold } = defineProps<LazilyRootProps>()

useTemplateRef<HTMLElement>("lazily-root")

const observer = useIntersectionObserver({
  rootMargin: margin,
  threshold: threshold
})

onUnmounted(() => {
  observer.dispose()
})

provide(LAZILY_INJECTION_KEY, {
  observer
})
</script>

<template>
  <component class="lazily-root" ref="lazily-root" aria-atomic="true" :is="tag">
    <slot />
  </component>
</template>