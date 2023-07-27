<template>
  <div class="mytable">
    <table class="table table-bordered table-striped">
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <tr>
          <slot name="tbody" :value='v' :index='i'></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  created() {},
};
</script>

<style>
</style>