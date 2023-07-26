import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// import App from "./components/day-02/code-03.vue";
// import App from "./components/day-02/侦听器.vue";
// import App from "./components/day-01/code-3.vue";
// import App from "./components/day-03/code-father.vue";
// import App from "./components/todo/code-01.vue";
import App from "./components/day-04/购物车/cart.vue";


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
