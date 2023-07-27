import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Index from '@/components/day-05/index.vue'
import Login from '@/components/day-05/login.vue'

const router = new VueRouter({
  routes: [
    { path: "/index", component: Index },
    { path: "/login", component: Login },
  ],
});

export default router;
