
//@ts-nocheck
import { defineComponent as n, openBlock as e, createElementBlock as s, toDisplayString as l } from "vue";
const a = { class: "lib-custom-button" }, c = /* @__PURE__ */ n({
  __name: "Button",
  props: {
    label: { default: "默认按钮" }
  },
  setup(t) {
    return (o, p) => (e(), s("button", a, l(o.label), 1));
  }
}), u = {
  install(t) {
    t.component("MyButton", c);
  }
};
export {
  c as MyButton,
  u as default
};
