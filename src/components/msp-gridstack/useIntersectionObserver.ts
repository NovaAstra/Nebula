export function useIntersectionObserver() {
  const observer = new IntersectionObserver(() => {

  })

  return {
    observer,
  }
}