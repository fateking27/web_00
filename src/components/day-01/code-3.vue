<template>
  <div>
    <label>品牌名称：</label>
    <input type="text" v-model="newArr.brandName" />
    <br />
    <label>创立时间：</label>
    <input type="date" v-model="newArr.date" />
    <br />
    <label>价格：</label>
    <input type="number" v-model="newArr.price" />
    <br />
    <label>图片：</label>
    <input type="text" v-model="newArr.img" />
    <br />
    <button type="button" @click="addItem()">添加</button>
    <hr />
    <myItem></myItem>
    <table>
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>价格</th>
        <th>图片</th>
        <th>操作</th>
      </tr>
      <tr v-for="(value, index) in arr" :key="value.id">
        <td>{{ index + 1 }}</td>
        <td>{{ value.brandName }}</td>
        <td>{{ value.date | dateFormat }}</td>
        <td :class="{ red: value.price > 10000 }">
          {{ value.price }}
        </td>
        <td><img :src="value.img" alt="" /></td>
        <td><button @click="delItem(index)">删除</button></td>
      </tr>
      <tr>
        <td>总价格</td>
        <td colspan="5">{{ total() }}</td>
      </tr>
      <tr>
        <td colspan="6" v-if="arr.length == 0">没有数据，请添加</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { dateFormat } from "../../utils/filters";
import myItem from "../day-02/code-02.vue";

export default {
  components: {
    myItem,
  },

  data() {
    return {
      newArr: {
        brandName: "",
        date: "",
        price: "",
        img: "http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225",
      },
      filters: {
        dateFormat,
      },
      arr: [
        {
          id: 1,
          brandName: "QQ",
          date: "2022-4-4",
          price: 10000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225",
        },
        {
          id: 2,
          brandName: "BWM",
          date: "2022-5-5",
          price: 20000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2019-06-18/EHV82VCR294K0008NOS.jpg?imageView&thumbnail=300y225",
        },
        {
          id: 3,
          brandName: "BYD",
          date: "2022-6-6",
          price: 30000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2021-04-12/G7DBDENINJEM0008NOS.jpg?imageView&thumbnail=300y225",
        },
      ],
    };
  },

  mounted() {
    // 从localStorage中获取已存储的数据
    // const storedData = localStorage.getItem("data");
    if (storedData) {
      this.arr = JSON.parse(storedData);
    }
  },

  methods: {
    //删除
    delItem(index) {
      this.arr.splice(index, 1);

      // localStorage.setItem("data", JSON.stringify(this.arr));
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

      // localStorage.setItem("data", JSON.stringify(this.arr));
    },
    
    total() {
      let sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        sum += this.arr[i].price;
      }
      return sum;
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

