<script lang="ts">
import { BaseLazilyProps } from "./type"

export interface LazilyProps extends BaseLazilyProps {
  action?: string;
}
</script>

<script lang="ts" setup>
import { inject, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { useIntersectionObserver } from "./useIntersectionObserver"
import { LAZILY_INJECTION_KEY } from "./type"

defineOptions({
  name: "MspLazily",
})

const { tag = 'div', margin, threshold } = defineProps<LazilyProps>()

const template = useTemplateRef<HTMLElement>("lazily")

const pending = ref<boolean>(false)
const fulfilled = ref<boolean>(false)
const rejected = ref<boolean>(false)

const { observer: _observer } = inject(LAZILY_INJECTION_KEY)

const observer = _observer || useIntersectionObserver({
  rootMargin: margin,
  threshold: threshold
})

const callback = () => {
  pending.value = true

  try {
    fulfilled.value = true
  } catch (e) {
    rejected.value = true
  } finally {
    pending.value = false
  }
}

onMounted(() => {
  observer.observe(template.value, callback)
})

onUnmounted(() => {
  observer.unobserve(template.value)
})
</script>

<template>
  <component ref="lazily" :is="tag">
    <slot name="pending" v-if="pending" />

    <slot v-if="fulfilled" />

    <slot name="rejected" v-if="rejected" />
  </component>
</template>