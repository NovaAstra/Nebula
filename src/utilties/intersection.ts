import { getWindow, getDocument } from "@/utilties/environment"

export function createIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  let observer: IntersectionObserver | undefined;

  return {
    observe(target: Element) {
      (
        observer ||
        (observer = new (getWindow(getDocument(target)).IntersectionObserver)(callback, options))
      ).observe(target);
    },
    unobserve(target: Element) {
      observer!.unobserve(target);
    },
    dispose() {
      observer && observer.disconnect();
    },
  };
};