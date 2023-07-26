<template>
  <div>
    <h2>子组件</h2>
    <button @click="handleClick">向父组件传递数据</button>
    <slot :message="message"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '这是子组件传递的数据',
    };
  },
  methods: {
    handleClick() {
      this.$emit('event-name', this.message);
    },
  },
};
</script>

<style>
</style>