import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
// import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";
// import zhCn from "element-plus/es/locale/lang/zh-cn";

const initApp = createApp(App);
initApp.use(store);

const pinia = createPinia();

/*initApp.use(ElementPlus, {
  locale: en,
});*/
initApp.use(pinia);
initApp.use(router);
initApp.mount("#app");
