import { computed, useTemplateRef } from "vue";
import { GridStackWidgetProps } from "./type"

function getAttrs(props: GridStackWidgetProps) {
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
  const element = useTemplateRef<HTMLElement>('widget')

  const {
    maxH = Number.MAX_SAFE_INTEGER,
    maxW = Number.MAX_SAFE_INTEGER,
    minH = 1,
    minW = 1
  } = props

  const bindAttrs = computed(() => ({
    ...getAttrs(props),
    'gs-max-w': maxW,
    'gs-max-h': maxH,
    'gs-min-w': minW,
    'gs-min-h': minH,
  }))

  return {
    element,

    bindAttrs
  }
}