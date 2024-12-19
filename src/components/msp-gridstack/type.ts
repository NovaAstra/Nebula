import { InjectionKey, Ref } from 'vue';
import { GridStack, GridStackWidget, GridStackOptions } from "gridstack"

export interface GridStackContext {
  gridStack: Ref<GridStack>
}

export const GRIDSTACK_INJECTION_KEY = Symbol('GridStack') as InjectionKey<GridStackContext>;

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