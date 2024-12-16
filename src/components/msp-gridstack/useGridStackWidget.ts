import { computed, onMounted, onUnmounted } from "vue";
import { GridStackWidgetProps } from "./gridstack.type"

function transformAttrs(props: GridStackWidgetProps) {
  return {
    'gs-id': props.id,
    'gs-x': props.x,
    'gs-y': props.y,
    'gs-w': props.w,
    'gs-h': props.h,
    'gs-no-resize': props.noResize,
    'gs-no-move': props.noMove,
    'gs-auto-position': props.autoPosition,
    'gs-locked': props.locked
  }
}

export function useGridStackWidget(props: GridStackWidgetProps) {
  const {
    maxH = Number.MAX_SAFE_INTEGER,
    maxW = Number.MAX_SAFE_INTEGER,
    minH = 1,
    minW = 1
  } = props

  const bindAttrs = computed(() => ({
    ...transformAttrs(props),
    'gs-max-w': maxW,
    'gs-max-h': maxH,
    'gs-min-w': minW,
    'gs-min-h': minH,
  }))

  onMounted(() => {

  })

  onUnmounted(() => {

  })

  return {
    bindAttrs
  }
}