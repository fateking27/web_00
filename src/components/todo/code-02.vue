<template>
    <div class="box">
      <el-form>
        <el-input
          placeholder="请填写任务信息"
          v-model="newArr.task"
          prop="task"
          class="tasks"
        >
          <template slot="prepend">任务</template>
        </el-input>

        <el-button type="primary" class="addbtn" @click="add()">添加新任务</el-button
        >

        <div class="content">
          <div class="item" v-for="(value,index) in arr" :key="value.id">
            <el-checkbox v-model="value.status" @change="changeStatus(index)">{{ value.task }}</el-checkbox>
            <span>{{ value.statu }}</span>
          </div>
        </div>

        <el-button-group>
          <el-button type="primary">全部</el-button>
          <el-button type="primary">已完成</el-button>
          <el-button type="primary">未完成</el-button>
        </el-button-group>
      </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newArr: {
        // id: this.arr.length == 0 ? '' : this.arr[this.arr.length - 1].id + 1,
        task: "",
        statu: "未完成",
        status: false,
      },
      arr: [
        {
          id: 1,
          task: "周一早晨开会",
          statu: "未完成",
          status: false,
        },
        {
          id: 2,
          task: "周二早晨开会",
          statu: "未完成",
          status: false,
        },
        {
          id: 3,
          task: "周三早晨开会",
          statu: "完成",
          status: true,
        },
      ],
    };
  },

  methods: {
    add() {
      this.$emit("addItem", this.arr.push({ ...this.newArr }));
    },
    changeStatus(index) {
      this.arr[index].statu = this.arr[index].status ? "完成" : "未完成";
    },
  },
};
</script>

<style lang="less" scoped>
.box {
    margin: 10px;
    width: 100%;
    > .el-form {
      > .tasks {
        width: 400px;
      }
      > .addbtn {
        margin: 0 10px;
        padding: 12px;
      }
      > .content {
        width: 400px;
        margin: 10px 0px;
        border: none;
        border-bottom: solid #cecccc 1px;
        // border-radius: 3px;
        > .item {
          border: solid #cecccc 1px;
          border-bottom: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          > .el-checkbox {
            padding: 10px;
          }
          > span {
            padding: 10px;
          }
        }
      }
    }
  }
</style>