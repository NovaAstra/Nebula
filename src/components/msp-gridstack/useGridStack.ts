import { GridStack, DDGridStack } from "gridstack"
import { onMounted, onUnmounted, useTemplateRef } from "vue";
import { unwrapEl } from "@/utilties/unwrapEl"
import { GridStackProps } from "./gridstack.type"
import { useIntersectionObserver } from "./useIntersectionObserver"
import { GridStackContextProvider } from "./gridstack.context"

export function bindEvents(gridStack: GridStack | null) {
  const getColumn = () => {
    if (!gridStack) return null
    return gridStack.getColumn()
  }

  const getRow = () => {
    if (!gridStack) return null
    return gridStack.getRow()
  }

  const getCellWidth = () => {
    if (!gridStack) return null
    return gridStack.cellWidth()
  }

  const getCellHeight = () => {
    if (!gridStack) return null
    return gridStack.getCellHeight()
  }

  const getMargin = () => {
    if (!gridStack) return null
    return gridStack.getMargin()
  }

  const compact = () => {
    if (!gridStack) return
    gridStack.compact()
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
  let gridStack: GridStack = null;

  const dd = GridStack.getDD() as DDGridStack

  const { observer } = useIntersectionObserver()

  onMounted(() => {
    const root = unwrapEl(element.value)
    gridStack = GridStack.init({
      lazyLoad: true,
      column: 12,
      cellHeight: 160,
      float: true,
    }, root)

    observer.observe(root)
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  GridStackContextProvider({
    observer
  })

  return {
    element,
    gridStack,

    ...bindEvents(gridStack)
  }
}