<template>
  <div>
    <span>全选:</span>
    <!-- 4. v-model 关联全选 - 选中状态 -->
    <input type="checkbox" v-model="checkAll" />
    <button @click="chck()">反选</button>
    <ul>
      <li v-for="value in arr" :key="value.name">
        <!-- 3. 对象.c - 关联 选中状态 -->
        <input type="checkbox" v-model="value.c" />
        <span>{{ value.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    checkAll: {
      get() {
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].c == false) {
            return false;
          }
        }
        return true;
      },
      set(value) {
        this.arr.forEach((v) => (v.c = value));
      },
    },
  },
  methods: {
    chck() {
      this.arr.forEach((v) => (v.c = !v.c));
    },
  },
};
</script>

<style>
</style>