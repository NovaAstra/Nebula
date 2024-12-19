import { GridStack, DDGridStack } from "gridstack"
import { onMounted, provide, Ref, ref, unref, useSlots, useTemplateRef } from "vue";
import { GridStackProps } from "./gridstack.type"
import { GRIDSTACK_INJECTION_KEY } from "./type"

export function bindEvents(gridStack: Ref<GridStack>) {
  const getColumn = () => {
    if (!unref(gridStack)) return null
    return unref(gridStack).getColumn()
  }

  const getRow = () => {
    if (!unref(gridStack)) return null
    return unref(gridStack).getRow()
  }

  const getCellWidth = () => {
    if (!unref(gridStack)) return null
    return unref(gridStack).cellWidth()
  }

  const getCellHeight = () => {
    if (!unref(gridStack)) return null
    return unref(gridStack).getCellHeight()
  }

  const getMargin = () => {
    if (!unref(gridStack)) return null
    return unref(gridStack).getMargin()
  }

  const compact = () => {
    if (!unref(gridStack)) return
    unref(gridStack).compact()
  }

  return {
    getColumn,
    getRow,
    getCellWidth,
    getCellHeight,
    getMargin,

    compact
  }
}

export function useGridStack(props: GridStackProps) {
  const element = useTemplateRef<HTMLElement>('gridstack')
  let gridStack = ref<GridStack>();

  const dd = GridStack.getDD() as DDGridStack

console.log(  useSlots().default()
)
  onMounted(() => {
    gridStack.value = GridStack.init({
      lazyLoad: true,
      column: 12,
      cellHeight: 160,
      float: true,
    }, element.value)

  })

  provide(GRIDSTACK_INJECTION_KEY, {
    gridStack
  })

  return {
    element,
    gridStack,

    ...bindEvents(gridStack)
  }
}