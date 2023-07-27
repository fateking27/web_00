<template>
  <div>
    <h2>任务详情</h2>
    <div v-if="tasks">
      <h3>{{ tasks.title }}</h3>
      <p>{{ tasks.description }}</p>
      <p>截止日期: {{ tasks.deadline }}</p>
    </div>
    <router-link to="/task-list">返回</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    const taskId = this.$route.params.taskId;
    // 根据任务ID从获取任务数据
    this.tasks = this.getTaskById(taskId);
  },
  mounted() {
    // 从localStorage中获取已存储的数据
  },
  methods: {
    getTaskById(taskId) {
      // 根据任务ID从本地存储获取任务数据
      const storedData = localStorage.getItem("data");
      if (storedData) {
        this.tasks = JSON.parse(storedData);
      }
      console.log(this.tasks);
      return this.tasks.find((tasks) => tasks.id === Number(taskId));
    },
  },
};
</script>

<style lang="less" scoped>
</style>