<script setup lang="ts">
import { GridStackWidgetProps } from "./gridstack.type"
import { useGridStackWidget } from "./useGridStackWidget"

defineOptions({
  name: 'MspGridStackItem',
})

const props = defineProps<GridStackWidgetProps>()

const { bindAttrs } = useGridStackWidget(props)
</script>

<template>
  <div class="grid-stack-item ui-resizable-autohide" v-bind="bindAttrs">
    <div class="grid-stack-item-content">
      <div> {{ id }}</div>
      <slot />
    </div>
  </div>
</template>