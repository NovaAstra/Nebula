export const once = <V>(fn: () => V): (() => V) => {
  let called: undefined | boolean;
  let cache: V;

  return () => {
    if (!called) {
      called = true;
      cache = fn();
    }
    return cache;
  };
};