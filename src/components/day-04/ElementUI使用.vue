<template>
  <div class="login">
    <div class="box">
      <img src="@/assets/f2b426504f9a5f31679b89f07bd4db2.png" alt="" />
      <div class="myform">
        <img src="@/assets/ac4d171bdfa5524ddeab689c26c62c0.png" alt="" />

        <el-form :model="user" :rules="userRuler" ref="user" label-width="80px">

          <el-form-item prop="username">
            <el-input class="username" v-model="user.username"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input class="password" v-model="user.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
          
        </el-form>
      </div>
    </div>
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
      userRuler: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 11,
            message: "长度在 4 到 11 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  background-color: rgb(41, 31, 65);
  height: 100vh;
  overflow: hidden;

  > .box {
    width: 100%;
    display: flex;
    margin: auto;
  }
}
</style>