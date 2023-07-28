import Vue from "vue";
import VueRouter from "vue-router";
import taskList from "@/components/taskList.vue";
import taskTail from "@/components/taskTail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: taskList },
    { path: "/task-list", component: taskList },
    { path: "/task/:taskId", component: taskTail },
  ],
});

export default router;
