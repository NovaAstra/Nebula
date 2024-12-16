import { GridStack, DDGridStack } from "gridstack"
import { onMounted, onUnmounted, useTemplateRef } from "vue";
import { GridStackProps } from "./gridstack.type"
import { useIntersectionObserver } from "./useIntersectionObserver"
import { GridStackContextProvider } from "./gridstack.context"


export function useGridStack(props: GridStackProps) {
  let template = useTemplateRef<HTMLElement>("gridstack")
  let gridStack: GridStack = null;

  const dd = GridStack.getDD() as DDGridStack

  const { observer } = useIntersectionObserver()

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

  onMounted(() => {
    gridStack = GridStack.init({
      lazyLoad: true,
      column: 12,
      cellHeight: 160,
      float: true,
    }, template.value)

    observer.observe(template.value)
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  GridStackContextProvider({
    observer
  })

  return {
    template,
    gridStack,

    getColumn,
    getRow,
    getCellWidth,
    getCellHeight,
    getMargin,

    compact
  }
}