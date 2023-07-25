<template>
    <div>
        用户名：<input type="text" v-model="user.username"><br>
        密码：<input type="text" v-model="user.password"><br>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async login(){
        let res = await userLoginApi(this.user)
        console.log(res)
    }
  }
};
</script>

<style>
</style>