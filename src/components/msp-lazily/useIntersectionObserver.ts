import { createIntersectionObserver } from "@/utilties/intersection"

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const callback = (entries: IntersectionObserverEntry[]) => {
    console.log(entries, "entries")
  }

  return createIntersectionObserver(callback, options)
}