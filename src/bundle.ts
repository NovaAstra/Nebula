
//@ts-nocheck
import { defineComponent as u, ref as r, openBlock as o, createElementBlock as n, Fragment as m, createElementVNode as l, toDisplayString as a, createCommentVNode as i } from "vue";
const p = { key: 0 }, d = /* @__PURE__ */ u({
  __name: "Button",
  props: {
    label: { default: "默认按钮" }
  },
  setup(e) {
    const t = r(0), s = () => {
      t.value += 1;
    };
    return (c, _) => (o(), n(m, null, [
      l("button", {
        class: "lib-custom-button",
        onClick: s
      }, a(c.label), 1),
      l("div", null, "Total: " + a(t.value), 1),
      t.value === 6 ? (o(), n("div", p, "Test")) : i("", !0)
    ], 64));
  }
}), b = {
  install(e) {
    e.component("MyButton", d);
  }
};
export {
  d as MyButton,
  b as default
};
