<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-sm-offset-1 col-md-10">
        <div class="row" id="moviexq">
          <div class="col-md-4">
            <img width="300" id="movieImg" src="" />
          </div>
          <div class="col-md-8">
            <div class="list-group">
              <h2
                class="list-group-item active"
                id="movieName"
                style="margin-top: 0px"
              >
                肖申克的救赎 <span class="btn btn-success" id="fav">收藏</span>
              </h2>
              <div class="list-group-item">
                <h4>导演: <span id="director"></span></h4>
              </div>
              <div class="list-group-item">
                <h4>编剧: <span id="bianju"></span></h4>
              </div>
              <div class="list-group-item">
                <h4>主演: <span id="actors"></span></h4>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-success">剧情简介</h3>
        <p class="infos" id="descp"></p>

        <h3 class="text-danger">精彩短评</h3>
        <hr />
        <div class="discuzs" id="discuzs"></div>
        <hr />
        <form>
          <div class="form-group">
            <textarea
              name="content"
              class="form-control"
              id="content"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="button"
            id="commentBtn"
            class="btn btn-success btn-lg btn-block"
          >
            提交评论
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
        
    };
  },
};
</script>

<style lang="less" scoped>
#discuzs {
  overflow: hidden;
  height: 200px;
  padding-right: 20px;
  /* border-top: solid 1px #dddcdc99; */
}
#discuzs::-webkit-scrollbar {
  width: 3px;
}
#discuzs:hover {
  overflow-y: auto;
}
#discuzs::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #bdc0c4;
}
#discuzs::-webkit-scrollbar-thumb {
  background: #919090;
  border-radius: 5px;
}

#discuzs::-webkit-scrollbar-thumb:hover {
  background: rgb(85, 86, 87);
}
</style>
