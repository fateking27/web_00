<template>
  <div>
    <h2>父组件</h2>
    <son>
      <template v-slot:default="props">
        <h3>{{ props.message }}</h3>
      </template>
    </son>
  </div>
</template>

<script>
import son from './son.vue';
export default {
    components: {
        son
    }
};
</script>

<style>
</style>