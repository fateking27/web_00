<template>
  <div>
    <button @click="show">让输入框聚焦</button>
    <input v-if="isshow" ref="myinput" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    show() {
      this.isshow = true;
      this.this.$nextTick(() => {
        console.log(this.$refs.myinput);
        this.$refs.myinput.focus();
      });
    },
  },
};
</script>

<style>
</style>