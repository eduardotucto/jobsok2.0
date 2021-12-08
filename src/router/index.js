import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from "@/views/Layout/PageLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/",
    component: PageLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/technician/:idTechnician",
        name: "technician",
        component: () => import("@/views/Technician.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
