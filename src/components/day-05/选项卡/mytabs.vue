<template>
  <div class="mytabs">
    <!-- 标题 -->
    <myheader bgcolor="orange">
      <template #left>
        <span class="el-icon-arrow-left"></span>
      </template>
      我的购物车
      <template #right>
        <span class="el-icon-search"></span>
      </template>
    </myheader>
    <!-- 内容 (动态组件)-->
    <component :is="comName"></component>
    <!-- 底部 -->
    <mynavbar :tabs='tablist'></mynavbar>
  </div>
</template>

<script>
import myheader from "./myheader.vue";
import mynavbar from "./mynavbar.vue";
import mygoods from "./mygoods.vue";
import myinfo from "./myinfo.vue";
import mysearch from "./mysearch.vue";
export default {
  data() {
    return {
      tablist: [
        {
          icon: "iconquanlingyuguimo1",
          text: "商品列表",
          name: "mygoods",
        },
        {
          icon: "iconwode",
          text: "我的信息",
          name: "myinfo",
        },
        {
          icon: "iconsousuo",
          text: "商品搜索",
          name: "mysearch",
        },
      ],
      comName:'mygoods'
    };
  },
  components: {
    mygoods,
    myheader,
    myinfo,
    mynavbar,
    mysearch,
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2336584_vs3rlrdic7.css");
</style>