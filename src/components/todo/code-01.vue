<template>
  <div class="todo_button">
    <el-button-group>
      <el-button type="primary" >全部</el-button>
      <el-button type="primary" >已完成</el-button>
      <el-button type="primary" >未完成</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.todo_button {
  width: 400px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border: 1px solid;
}
</style>