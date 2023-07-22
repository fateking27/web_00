<template>
  <div>
    <label>资产名称：</label>
    <input type="text" v-model="newArr.brandName" ref="brandNameInput" />
    <br />
    <label>创立时间：</label>
    <input type="date" v-model="newArr.date" />
    <br />
    <label>价格：</label>
    <input type="number" v-model="newArr.price" />
    <br />
    <button type="button" @click="addItem()">添加</button>

    <table>
      <tr>
        <th>编号</th>
        <th>资产名称</th>
        <th>创立时间</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(value, index) in arr" :key="value.id">
        <td>{{ index + 1 }}</td>
        <td>{{ value.brandName }}</td>
        <td>{{ value.date }}</td>
        <td :class="{ red: value.price > 10000 }">
          {{ value.price }}
        </td>
        <td><button @click="delItem(index)">删除</button></td>
      </tr>
      <tr>
        <td>统计：</td>
        <td colspan="2">总价格：{{ total() }}</td>
        <td colspan="2">平均价为：{{total_()}}</td>
      </tr>
      <tr>
        <td colspan="6" v-if="arr.length == 0">没有数据，请添加</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newArr: {
        brandName: "",
        date: "",
        price: "",
      },
      arr: [
        {
          id: 1,
          brandName: "QQ",
          date: "2022-4-4",
          price: 10000,
        },
        {
          id: 2,
          brandName: "BWM",
          date: "2022-5-5",
          price: 20000,
        },
        {
          id: 3,
          brandName: "BYD",
          date: "2022-6-6",
          price: 30000,
        },
      ],
    };
  },

  mounted() {
    // 从localStorage中获取已存储的数据
    const storedData = localStorage.getItem("data");
    if (storedData) {
      this.arr = JSON.parse(storedData);
    }
    // 自动聚焦第一个输入框
    this.$refs.brandNameInput.focus();
  },

  methods: {
    //删除
    delItem(index) {
      this.arr.splice(index, 1);

      localStorage.setItem("data", JSON.stringify(this.arr));
    },
    //添加
    addItem() {
      this.arr.push({ ...this.newArr });
      // this.arr.push({
      //   id: this.arr.length + 1,
      //   brandName: this.newArr.brandName,
      //   date: this.newArr.date,
      //   price: this.newArr.price,
      //   img: this.newArr.img,
      // });

      localStorage.setItem("data", JSON.stringify(this.arr));
    },

    total() {
      let sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        let num = this.arr[i].price;
        sum += +num
      }
      return +sum;
    },
    total_() {
      let sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        sum += +this.arr[i].price;
      }
      const average = sum / this.arr.length;
      return average.toFixed(2);
    },
  },
};
</script>

<style lang="less">
.red {
  color: red;
}
table {
  width: 700px;
  margin-top: 20px;
}

table,
td,
th {
  border: solid 1px;
  border-collapse: collapse;
  text-align: center;
}
tr {
  text-align: center;
}

th {
  background-color: aqua;
}

img {
  width: 100px;
}
</style>

