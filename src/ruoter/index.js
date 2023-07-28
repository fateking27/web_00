import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Index from "@/components/day-05/index.vue";
import School from "@/components/day-05/school.vue";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/index" },
    { path: "/index", component: Index },
    {
      path: "/school/:id",
      component: School,
      children: [
        {
          path: "",
          redirect: "detail",
        },
        {
          path: "detail",
          name: "detail",
          component: () => import("@/components/day-05/detail.vue"),
        },
        {
          path: "talk",
          name: "talk",
          component: () => import("@/components/day-05/talk.vue"),
        },
        {
          path: "jobinfo",
          name: "jobinfo",
          component: () => import("@/components/day-05/jobinfo.vue"),
        },
      ],
    },
  ],
});

export default router;
