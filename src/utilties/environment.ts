import { once } from "./once"

export const isBrowser = typeof window !== "undefined";

const getDocumentElement = () => document.documentElement;

export const getDocument = (node: Element): Document =>
  node.ownerDocument;

export const getWindow = (doc: Document) => doc.defaultView!;

export const isRTLDocument = once((): boolean => {
  return isBrowser
    ? getComputedStyle(getDocumentElement()).direction === "rtl"
    : false;
});