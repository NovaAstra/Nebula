import type { InjectionKey } from 'vue';
import { createIntersectionObserver } from "@/utilties/intersection"

export interface LazilyContext {
  observer: ReturnType<typeof createIntersectionObserver>
}

export const LAZILY_INJECTION_KEY = Symbol('Lazily') as InjectionKey<LazilyContext>;

export interface LazilyProps {
  lazy?: boolean;
  margin?: string;
  threshold?: number | number[];
}