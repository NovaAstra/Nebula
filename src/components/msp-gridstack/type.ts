import { InjectionKey, Ref } from 'vue';
import { GridStack } from "gridstack"

export interface GridStackContext {
  gridStack: Ref<GridStack>
}

export const GRIDSTACK_INJECTION_KEY = Symbol('GridStack') as InjectionKey<GridStackContext>;
