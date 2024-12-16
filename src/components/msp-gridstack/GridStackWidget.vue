<script setup lang="ts">
import { GridStackWidgetProps } from "./gridstack.type"
import { useGridStackWidget } from "./useGridStackWidget"

defineOptions({
  name: 'MspGridStackWidget',
})

const props = defineProps<GridStackWidgetProps>()

const { bindAttrs } = useGridStackWidget(props)
</script>

<template>
  <div class="msp-grid-stack-widget grid-stack-item" v-bind="bindAttrs">
    <div class="grid-stack-item-content">
      <slot />
    </div>
  </div>
</template>