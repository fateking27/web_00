import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/index",
      name: "index",
      component: () => import("@/components/day-06/综合案例/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/day-06/综合案例/login.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.path == "/login") {
//     next();
//   } else {
//     let token = localStorage.getItem("test_token");
//     if (token) {
//       next();
//     } else {
//       next({ path: "/login" });
//     }
//   }
// });

export default router;
