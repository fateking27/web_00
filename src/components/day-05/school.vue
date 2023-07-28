<template>
  <div class="school">
    <h1>这是{{ schoolName }}校区</h1>
    <button @click.prevent="jump('detail')">就业介绍</button>&nbsp;&nbsp;
    <button @click.prevent="jump('jobinfo')">就业详情</button>&nbsp;&nbsp;
    <button @click.prevent="jump('talk')">线上咨询</button>&nbsp;&nbsp;
    <!-- <router-link :to="'/school' + id + '/jobinfo'">就业详情</router-link
    >&nbsp;&nbsp;
    <router-link :to="'/school' + id + '/talk'">线上咨询</router-link
    >&nbsp;&nbsp; -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      schoolName: "",
      id: "",
    };
  },
  methods: {
    jump(name) {
      this.$router.push({ name: name }).catch((err) => {});
    },
  },
  // 从另外一个路由跳转到当前路由，需要加载当前组件，触发mounted
  mounted() {
    // let id = this.$route.params.id
    // console.log('本次的id:', id);
    // if (id == 1) {
    //   this.schoolName = '成都'
    // } else if (id == 2) {
    //   this.schoolName = '天府'
    // } else if (id == 3) {
    //   this.schoolName = '广州'
    // }
    // else if (id == 4) {
    //   this.schoolName = '深圳'
    // }
    // else {
    //   this.schoolName = '未知'
    // }
  },
  // 当前单击之后，还在同一个路由，只是参数变化，触发watch
  watch: {
    $route: {
      handler(to) {
        // to:跳转的目标路由对象
        // from:源路由对象
        let id = to.params.id;
        console.log("本次的id:", id);

        if (id == 1) {
          this.schoolName = "天府";
        } else if (id == 2) {
          this.schoolName = "成都";
        } else if (id == 3) {
          this.schoolName = "广州";
        } else if (id == 4) {
          this.schoolName = "深圳";
        } else {
          this.schoolName = "未知";
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang='less' scoped>
.school {
  background-color: #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>