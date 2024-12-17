<script lang="ts" setup>
import { inject, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { useIntersectionObserver } from "./useIntersectionObserver"
import { LAZILY_INJECTION_KEY, LazilyProps } from "./type"

defineOptions({
  name: "MspLazily"
})

const props = defineProps<LazilyProps>()

const template = useTemplateRef<HTMLElement>("lazily")

const { observer: _observer } = inject(LAZILY_INJECTION_KEY)

const observer = _observer || useIntersectionObserver({
  rootMargin: props.margin,
  threshold: props.threshold
})

onMounted(() => {
  observer.observe(template.value)
})

onUnmounted(() => {
  observer.unobserve(template.value)
})
</script>

<template>
  <div ref="lazily">
    <slot name="pending" />
    <slot name="success" />
    <slot name="error" />
  </div>
</template>