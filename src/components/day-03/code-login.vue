<template>
  <div>
    <h1>登录</h1>
    <loginBtn title="登录" type="" @click="login"></loginBtn>
  </div>
</template>

<script>
import loginBtn from "./code-loginBtn.vue";
export default {
  data() {
    return {};
  },
  components: {
    loginBtn,
  },
  methods: {
    login(e) {
      console.log(e, "登录咯");
    },
  },
};
</script>

<style lang="less" scoped>

</style>

