<template>
  <div>
    <ul>
      <li v-for="value in arr" :key="value.id">
        {{ value.bookName }}
        <button type="button" @click="addItem(value)">买书</button>
      </li>
    </ul>

    <table>
      <tr>
        <th>编号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(value, index) in arr" :key="value.id">
        <td>{{ index + 1 }}</td>
        <td>{{ value.bookName }}</td>
        <td>{{ value.price }}</td>
        <td>{{ value.currt }}</td>
        <td>{{ value.price * value.currt }}</td>
      </tr>
      <tr>
        <td colspan="5">总价格：{{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          bookName: "水浒传",
          currt: 0,
          price: 123,
        },
        {
          id: 2,
          bookName: "三国演义",
          currt: 0,
          price: 103,
        },
        {
          id: 3,
          bookName: "西游记",
          currt: 0,
          price: 122,
        },
      ],
    };
  },
  computed: {
    total() {
      let sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        sum += this.arr[i].price * this.arr[i].currt;
      }
      return sum;
    },
  },
  methods: {
    addItem(value) {
      value.currt++;
    },
  },
};
</script>

<style lang='less'>
table,
td,
th {
  border: solid 1px;
  border-collapse: collapse;
  text-align: center;
}
</style>