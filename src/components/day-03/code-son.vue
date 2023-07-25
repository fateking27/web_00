<template>
  <div class="son">
    <h2>子组件：son</h2>
    你需要还的账单：<input type="number" v-model="account">
    <button type="button" @click="sendCount">还钱</button>
  </div>
</template>

<script>
export default {
  // props: [String, Number],
  // myMoney: {
  //   type: Number,
  //   validator(value) {
  //     if (value > 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      account: 0,
    };
  },
  methods: {
    sendCount(){
      this.$emit('getCount',this.account)
    }
  }
};
</script>

<style lang="less" scoped>
.son {
  background-color: pink;
  width: 90%;
  padding: 20px;
}
</style>