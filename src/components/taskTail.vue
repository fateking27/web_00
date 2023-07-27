<template>
  <div>
    <h2>任务详情</h2>
    <div v-if="task">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <p>截止日期: {{ task.deadline }}</p>
    </div>
    <router-link to="/task-list">返回</router-link>
  </div>
</template>

<script>
export default {
  name: "TaskDetail",
  data() {
    return {
      task: null,
    };
  },
  created() {
    const taskId = this.$route.params.taskId;
    // 根据任务ID从获取任务数据
    this.task = this.getTaskById(taskId);
  },
  methods: {
    getTaskById(taskId) {
      // 根据任务ID从后端获取任务数据
      const tasks = [
        {
          id: 1,
          title: "任务1",
          description: "这是任务1的描述",
          deadline: "2021-12-31",
        },
        {
          id: 2,
          title: "任务2",
          description: "这是任务2的描述",
          deadline: "2022-01-15",
        },
      ];
      return tasks.find((task) => task.id === Number(taskId));
    },
  },
};
</script>

<style lang="less" scoped>

</style>