import { createContext } from "@/utilties/createContext"

export interface GridStackContext {
  observer: IntersectionObserver;
}


export const [GridStackContextProvider, useGridStackContext] =
  createContext<GridStackContext>('GridStackContext')