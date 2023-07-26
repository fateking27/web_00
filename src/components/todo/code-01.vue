<template>
  <div class="todo_button">
    <con></con>
  </div>
</template>

<script>
import con from "../todo/code-02.vue";
export default {
  components: {
    con,
  },
  data() {
    return {
      // newArr: {
      //   // id: this.arr.length == 0 ? '' : this.arr[this.arr.length - 1].id + 1,
      //   task: "",
      //   statu: "未完成",
      //   status: false,
      // },
      // arr: [
      //   {
      //     id: 1,
      //     task: "周一早晨开会",
      //     statu: "未完成",
      //     status: false,
      //   },
      //   {
      //     id: 2,
      //     task: "周二早晨开会",
      //     statu: "未完成",
      //     status: false,
      //   },
      //   {
      //     id: 3,
      //     task: "周三早晨开会",
      //     statu: "完成",
      //     status: true,
      //   },
      // ],
    };
  },
  methods: {
    // addItem() {
    //   this.arr.push({ ...this.newArr });
    // },
    // changeStatus(index) {
    //   this.arr[index].statu = this.arr[index].status ? "完成" : "未完成";
    // },
  },
};
</script>

<style lang="less" scoped>
.todo_button {
  width: 525px;
  margin-top: 10px;
  // display: flex;
  // justify-content: center;
  border: 1px solid;
}
</style>