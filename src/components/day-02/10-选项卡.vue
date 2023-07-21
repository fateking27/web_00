<template>
  <div class="container">
    <ul class="list">
      <li
        :class="{ active: activeItem === index }"
        v-for="(value, index) in ItemArr"
        :key="index"
        @click="deal(index)"
      >
        {{ value }}
      </li>
      <!-- <li>所有商品</li>
      <li>装饰摆件</li>
      <li>布艺软装</li> -->
    </ul>
    <div class="content">
      <div class="panel active">首页-内容</div>
      <div class="panel">所有商品-内容</div>
      <div class="panel">装饰摆件-内容</div>
      <div class="panel">布艺软装-内容</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      ItemArr: ["首页", "所有商品", "装饰摆件", "布艺软装"],
      activeItem: 0,
    };
  },
  methods: {
    deal(index) {
      this.activeItem = index;
    },
  },
};
</script>
<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 600px;
  margin: 50px auto;
}
ul {
  list-style: none;
  width: 600px;
  display: flex;
  height: 50px;
}
ul > li {
  flex: 1;
  background-color: #ccc;
  border-right: 1px solid rgb(255, 255, 255);
  line-height: 50px;
  text-align: center;
  border-bottom: 2px solid #fff;
}
ul > li:last-child {
  border-right: none;
}
ul > li.active {
  background-color: orange;
  border-bottom: 2px solid transparent;
}
.content {
  width: 600px;
  height: 400px;
  overflow: hidden;
}
.content .panel {
  width: 600px;
  height: 400px;
  background-color: #ccc;
  display: none;
  padding: 50px;
  font-size: 30px;
}
.content .panel.active {
  display: block;
}
</style>