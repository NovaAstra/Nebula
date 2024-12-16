import { GridStack, DDGridStack } from "gridstack"
import { onMounted, useTemplateRef } from "vue";
import { GridStackProps } from "./gridstack.type"


export function useGridStack(props: GridStackProps) {
  let template = useTemplateRef<HTMLElement>("gridstack")
  let gridStack: GridStack = null;

  const dd = GridStack.getDD() as DDGridStack

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
      margin: 8,
      float: true,
    }, template.value)

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