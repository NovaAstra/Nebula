import { GridStackWidget, GridStackOptions } from "gridstack"

export interface GridStackWidgetProps extends GridStackWidget {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface GridStackProps
  extends Omit<GridStackOptions, "acceptWidgets" | "children"> {
  modelValue?: GridStackWidget[];
  grid?: boolean;
}