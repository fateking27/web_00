<template>
  <div class="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">{{ title }}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        
      },
    };
  },
};
</script>

<style>
</style>