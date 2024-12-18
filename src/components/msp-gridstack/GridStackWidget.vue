<script setup lang="ts">
import { Lazily } from "@/components/msp-lazily"
import { GridStackWidgetProps } from "./gridstack.type"
import { useGridStackWidget } from "./useGridStackWidget"

defineOptions({
  name: 'MspGridStackWidget',
})

const props = defineProps<GridStackWidgetProps>()

const { bindAttrs } = useGridStackWidget(props)
</script>

<template>
  <div class="grid-stack-item" ref="widget" v-bind="bindAttrs">
    <Lazily class="grid-stack-item-content msp-grid-stack-widget ">
        <slot />
        1231
    </Lazily>
  </div>
</template>

<style lang="scss">
.ui-draggable-dragging>* {
  pointer-events: none !important;
}

.msp-grid-stack-widget {
  border: 1px solid transparent;
  box-shadow: 0 2px 8px #00000014;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
  background: #fff;
  background: #ffffff;
  border-radius: 2px;
  border-radius: 2px;
  transition: box-shadow .3s cubic-bezier(.645, .045, .355, 1), transform .3s cubic-bezier(.645, .045, .355, 1);
  transition: box-shadow .3s cubic-bezier(.645, .045, .355, 1), transform .3s cubic-bezier(.645, .045, .355, 1);
}

.ui-resizable-resizing .msp-grid-stack-widget,
.ui-draggable-dragging .msp-grid-stack-widget {
  opacity: 1;
}

.ui-draggable-dragging .msp-grid-stack-widget,
.grid-stack:not(.grid-stack-static) .grid-stack.ui-draggable:not(.ui-draggable-disabled) .msp-grid-stack-widget {
  cursor: pointer;
}

.ui-draggable-dragging .msp-grid-stack-widget,
.ui-draggable-dragging .msp-grid-stack-widget,
.grid-stack:not(.grid-stack-static) .grid-stack:hover .msp-grid-stack-widget {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px 0 rgba(37, 43, 58, 0.24);
}
</style>