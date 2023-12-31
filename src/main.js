import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import App from './App.vue'
// import App from "./components/day-02/code-03.vue";
// import App from "./components/day-02/侦听器.vue";
// import App from "./components/day-01/code-3.vue";
// import App from "./components/day-03/code-father.vue";
// import App from "./components/todo/code-01.vue";
// import App from "./components/day-04/作用域插槽/father.vue";
// import App from "./components/day-05/选项卡/mytabs.vue";

Vue.config.productionTip = false;

// import router from "./ruoter/router.js";
import router from "./ruoter/index_综合案例.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

