import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import project1 from "@/views/project1.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Home,
    },
    {
        path: "/project1",
        component: project1,
    },
  ],
});

export default router;