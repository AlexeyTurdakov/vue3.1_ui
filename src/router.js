import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

import Login from "./views/Login.vue";
import DashBoard from "./views/Dashboard.vue";
import Forget from "./views/Forget.vue";
import Mail from "./views/Mail.vue";

export default createRouter({
  routes: [
    { path: "/login", component: Login, alias: "/" },
    { path: "/dashboard", component: DashBoard },
    { path: "/forget", component: Forget },
    { path: "/mail", component: Mail },
  ],
  history: createWebHistory(),
});
