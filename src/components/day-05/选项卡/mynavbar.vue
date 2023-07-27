<template>
  <div class="tabscontainer">
    <div class="tabitem">
      <span class=""></span>
      <span> 名称 </span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.tabscontainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #efefef;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tabitem {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }
  // 激活项的样式
  .activeStyle {
    color: #ff0000;
  }
}
</style>