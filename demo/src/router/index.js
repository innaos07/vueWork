import { createRouter, createWebHistory } from "vue-router";
import routes from '../routes';
import DemoMenu from "../components/DemoMenu.vue";
import DemoCounter from "../demo4/DemoCounter.vue";
import Server from "../demo5/Server.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DemoMenu,
    },
    {
      path: "/counter-0",
      name: "counter-base",
      component: DemoCounter,
    },
    {
      path: '/server',
      name: "server",
      component: Server,
    }

  ],
});

export default router;
