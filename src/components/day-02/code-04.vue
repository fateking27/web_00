<template>
  <input type="text" v-myfocus v-mycolor="'red'" />
</template>

<script>
import { mycolor, myfocus } from "../../utils/directives";
export default {
  data() {
    return {};
  },
  //   directives: {
  //     myfocus: {
  // inserted(el) {
  //   el.focus();
  // },
  //     },
  //     mycolor: {
  //       inserted(el, binding) {
  //         el.style.color = binding.value;
  //       },
  //     },
  //   },

  directives: {
    mycolor,
    myfocus,
  },
};
</script>

<style>
</style>