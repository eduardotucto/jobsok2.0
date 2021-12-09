import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from "@/views/Layout/PageLayout.vue";
import AuthLayout from "@/views/Layout/AuthLayout.vue";

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
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/Auth/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
