import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Input } from "element-ui";
import "./utils/svg-icon.ts";
[Button, Input].forEach(item => {
  Vue.use(item);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");