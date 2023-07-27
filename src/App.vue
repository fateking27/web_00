<template>
  <div id="app">
    <!-- 添加超链接
    router-link:必须设置to  to='路由路径'   值需要参照路由配置-->
    <!-- <router-link to="/index">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/login">登陆</router-link>&nbsp;&nbsp;&nbsp;&nbsp; -->
    <h1>任务管理</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import taskList from './components/taskList.vue';
import taskTail from './components/taskTail.vue';

export default {
  components: {
    taskList,taskTail
  },
  name: "App",
};
</script>

<style lang="less">

</style>
