import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/tests",
  },
  {
    path: "/",
    component: () => import("./layouts/LayoutMain"),
    children: [
      {
        name: "resources",
        path: "resources",
        component: () => import("./views/Resource"),
        meta: {
          title: "Resources",
          description: "Overview of user's resource",
          rule: "student",
        },
      },
      {
        name: "admin-resources",
        path: "admin/resources",
        component: () => import("./views/Resource/admin.vue"),
        meta: {
          title: "Resources - Admin Overview",
          description: "Overview of user's resource",
          rule: "admin",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("./layouts/LayoutAuth"),
    children: [
      {
        name: "login",
        path: "/login",
        component: () => import("./views/Auth/Login"),
        meta: {
          rule: "public",
        },
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.rule !== "public" && !store.getters["auth/isUserLoggedIn"]) {
    next("/login");
  } else if (to.name === "login" && store.getters["auth/isUserLoggedIn"]) {
    next("/resources");
  } else next();
});

export default router;
