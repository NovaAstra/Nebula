
import { ComponentPublicInstance, DefineComponent, unref } from 'vue'

export type TemplateRef = HTMLElement | (ComponentPublicInstance) | null | undefined | { $el: HTMLElement };

export const unwrapEl = <T extends TemplateRef | DefineComponent>(el: T) => {
  if (!el) { return }
  if (typeof el !== 'object') { return }

  el = unref(el)

  if (!el) { return }

  if (typeof (el as ComponentPublicInstance).$el !== 'undefined') {
    return (el as ComponentPublicInstance).$el as HTMLElement
  }

  return el as HTMLElement
}
