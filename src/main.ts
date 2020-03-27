import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
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
  Option,
  Alert,
  Form,
  FormItem,
  Upload,
  Dialog,
  Radio,
  Message,
  MessageBox
} from 'element-ui'
import './utils/svg-icon.ts'
;[
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
  Option,
  Alert,
  Form,
  FormItem,
  Upload,
  Dialog,
  Radio
].forEach(item => {
  Vue.use(item)
})
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.use(VueAxios, Axios)
Vue.config.productionTip = false
// 全局引入axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
