import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";
import MainPage from "../views/main-page/main-page.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainPage",
    name: "mainPage",
    component: MainPage
  },
  {
    path: "/",
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes
});

export default router;
