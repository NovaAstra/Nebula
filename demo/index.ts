import { App } from "vue";
import MyButton from "./Button.vue";

export { MyButton };

export default {
  install(app: App) {
    app.component("MyButton", MyButton);
  },
};