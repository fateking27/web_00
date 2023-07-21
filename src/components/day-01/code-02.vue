<template>
  <table>
    <tr>
      <th>编号</th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
    </tr>
    <tr v-for="(value, index) in arr" :key="value.id">
      <td>{{ index + 1 }}</td>
      <td>{{ value.name }}</td>
      <td>{{ value.gender }}</td>
      <td>{{ value.age }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      arr: [
        { id: 1, name: "jack", gender: "男", age: "20" },
        { id: 2, name: "luce", gender: "男", age: "21" },
        { id: 3, name: "alice", gender: "男", age: "22" },
        { id: 4, name: "artuliys", gender: "男", age: "23" },
        { id: 5, name: "aliks", gender: "男", age: "24" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
table,td,th{
    border: solid 1px;
    border-collapse: collapse;
}
</style>
