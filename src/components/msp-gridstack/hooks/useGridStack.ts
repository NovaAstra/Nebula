import { GridStack, DDGridStack } from "gridstack"
import { onMounted, useTemplateRef } from "vue";

export interface GridStackProps {
  static: boolean;
  float: boolean;
  column: number;
  showGridBlock: boolean;
  animate: boolean;
  minRow?: number;
  maxRow?: number;
  cellHeight?: number | string;
  margin?: number | string;
}

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
      lazyLoad:true
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