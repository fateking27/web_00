<template>
  <div class="sister">
    <h1>我是子组件:sister</h1>
    <h2></h2>
  </div>
</template>

<script>
import bus from '@utils/eventBus'
export default {
    data () {
        return {
            score:0,
        }
    },
    methods: {
        handsClick(){
            bus.$emit('get',)
        }
    }
};
</script>

<style>
</style>