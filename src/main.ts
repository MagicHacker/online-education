import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Input,
  Menu,
  Submenu,
  MenuItem,
  Tabs,
  TabPane,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Select,
  Option
} from "element-ui";
import "./utils/svg-icon.ts";
[
  Button,
  Input,
  Menu,
  Submenu,
  MenuItem,
  Tabs,
  TabPane,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Select,
  Option
].forEach(item => {
  Vue.use(item);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
