<template>
  <div class="grid-stack-item" :gs-id="id" :gs-x="x" :gs-y="y" :gs-w="w" :gs-h="h" :gs-min-w="minW" :gs-min-h="minH"
    :gs-max-w="maxW" :gs-max-h="maxH" :gs-no-resize="noResize" :gs-no-move="noMove" :gs-auto-position="autoPosition"
    :gs-locked="locked">
    <div class="grid-stack-item-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

defineOptions({
  name: 'MspGridStackItem',
})

const props = defineProps({
  id: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
  minW: { type: Number, default: 1 },
  minH: { type: Number, default: 1 },
  maxW: { type: Number },
  maxH: { type: Number },
  noResize: { type: Boolean },
  noMove: { type: Boolean },
  autoPosition: { type: Boolean, default: false },
  locked: { type: Boolean },
})
</script>

<style lang="scss"></style>