import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
import Login from "./views/Login.vue";

export default createRouter({
  routes: [{ path: "/login", component: Login }],
  history: createWebHistory(),
});
