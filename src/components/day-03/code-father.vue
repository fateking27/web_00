<template>
  <div class="father">
    <h1>父组件：father</h1>
    <h2>还钱？：{{mypay}}</h2>
    <son @getCount='huanqian'></son>
  </div>
</template>

<script>
import son from './code-son.vue'
export default {
    components: {
    son
  },

  data () {
    return {
      mypay:0,  
    }
  },

  methods: {
    huanqian(data){
      this.mypay = data
    }
  }
}
</script>

<style lang="less" scoped>
.father {
  background-color: #ccc;
  padding: 20px;
}
</style>