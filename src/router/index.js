import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from "@/views/Layout/PageLayout.vue";
import AuthLayout from "@/views/Layout/AuthLayout.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/",
    component: PageLayout,
    children: [
      {
        path: "/",
        name: "home",
        meta: { rutaProtegida: true },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/technician/:idTechnician",
        name: "technician",
        meta: { rutaProtegida: true },
        component: () => import("@/views/Technician.vue"),
      },
      {
        path: "/busqueda/:idCategory",
        name: "search",
        meta: { rutaProtegida: true },
        component: () => import("@/views/Search.vue"),
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

router.beforeEach((to, from, next) => {
  if (to.meta.rutaProtegida) {
    if (store.getters.usuarioAutenticado) {
      next();
    } else {
      next("login");
    }
  } else {
    next();
  }
});

export default router
