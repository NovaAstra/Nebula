import type { InjectionKey } from 'vue';
import { createIntersectionObserver } from "@/utilties/intersection"

export interface LazilyContext {
  observer: ReturnType<typeof createIntersectionObserver>
}

export const LAZILY_INJECTION_KEY = Symbol('Lazily') as InjectionKey<LazilyContext>;

export interface BaseLazilyProps {
  lazy?: boolean;
  delay?: number | boolean;
  margin?: string;
  threshold?: number | number[];
  tag?: string | Object;
}