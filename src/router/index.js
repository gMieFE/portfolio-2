import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Project1 from "@/views/Project1.vue";
import Project2 from "@/views/project2.vue";
import Project3 from "@/views/Project3.vue";
import Project4 from "@/views/Project4.vue";
import Project5 from "@/views/Project5.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Home,
    },
    {
        path: "/Project1",
        component: Project1,
    },
    {
        path: "/Project2",
        component: Project2,
    },
    {
        path: "/Project3",
        component: Project3,
    },
    {
        path: "/Project4",
        component: Project4,
    },
    {
        path: "/Project5",
        component: Project5,
    },
  ],
});

export default router;