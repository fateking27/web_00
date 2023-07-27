<template>
  <div>
    <h3>添加任务:</h3>
    <form @submit.prevent="addTask">
      <label for="title">标题:</label>
      <input type="text" id="title" v-model="newTask.title" required /><br />
      <label for="task">任务描述:</label>
      <input
        type="text"
        id="task"
        v-model="newTask.task"
        required
      /><br />
      <label for="deadline">添加日期:</label>
      <input
        type="date"
        id="deadline"
        v-model="newTask.deadline"
        required
      /><br />
      <button type="submit">添加</button>
    </form>
    <hr />
    <h2>任务列表</h2>
    <hr />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.task }}</p>
        <p>添加日期: {{ task.deadline }}</p>
        <button @click="goToTaskDetail(task.id)">任务详情</button>
        <hr />
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "任务1",
          task: "这是任务1的描述",
          deadline: "2021-12-31",
        },
        {
          id: 2,
          title: "任务2",
          task: "这是任务2的描述",
          deadline: "2022-01-15",
        },
      ],
      newTask: {
        title: "",
        task: "",
        deadline: "",
      },
    };
  },

  mounted() {
    // 从localStorage中获取已存储的数据
    const storedData = localStorage.getItem("data");
    if (storedData) {
      this.tasks = JSON.parse(storedData);
    }
  },

  methods: {
    addTask() {
      if (
        this.newTask.title &&
        this.newTask.task &&
        this.newTask.deadline
      ) {
        const newId =
          this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        this.tasks.push({
          id: newId,
          title: this.newTask.title,
          task: this.newTask.task,
          deadline: this.newTask.deadline,
        });
        this.newTask = {
          title: "",
          task: "",
          deadline: "",
        };
      }
      localStorage.setItem("data", JSON.stringify(this.tasks));
    },
    goToTaskDetail(taskId) {
      this.$router.push({ path: `/task/${taskId}` });
    },
  },
};
</script>

<style>
</style>