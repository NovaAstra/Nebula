import { createIntersectionObserver } from "@/utilties/intersection"

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const elements = new WeakMap<Element, IntersectionObserverEntry>()
  const callbacks = new WeakMap<Element, Function>()

  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entrie of entries) {
      if (entrie.intersectionRatio <= 0) continue;

      const el = entrie.target

      if (!elements.has(el)) {
        elements.set(el, entrie)
      }

      if (callbacks.has(el)) {
        callbacks.get(el)()
      }
    }
  }

  const observer = createIntersectionObserver(callback, options)

  return {
    observe: (target: Element, callback?: Function) => {
      observer.observe(target)

      callbacks.set(target, callback)
    },
    unobserve(target: Element) {
      observer!.unobserve(target);
    },
    dispose() {
      observer.dispose();
    },
  }
}