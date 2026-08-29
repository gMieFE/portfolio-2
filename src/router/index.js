import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import project1 from "@/views/project1.vue";
import project2 from "@/views/project2.vue";


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
    {
        path: "/project2",
        component: project2,
    },
  ],
});

export default router;