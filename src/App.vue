<template>
  <div id="app">
    <!-- 添加超链接
    router-link:必须设置to  to='路由路径'   值需要参照路由配置-->
    <router-link to="/index">首页</router-link> &nbsp;&nbsp;
    <router-link to="/school/1">天府校区</router-link>&nbsp;&nbsp;
    <router-link to="/school/2">成都校区</router-link>&nbsp;&nbsp;
    <router-link to="/school/3">广州校区</router-link>&nbsp;&nbsp;
    <router-link to="/school/4">深圳校区</router-link>&nbsp;&nbsp;
    <!-- <h1>任务管理</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  background-color: #f7f420;
  padding: 10px;
}
</style>
