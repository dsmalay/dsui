<template>
  <div class="ewm-box">
    <img :src="eSrc">
    <p class="wenzi">{{sao}}</p>
    <div class="btn-xz">
      <a @click="xiazai" :href="downlink">下载</a>
    </div>
    <!-- <span class="iconfont icon-anzhuo"></span> -->
  </div>
</template>
<script>
  export default {
    name: 'ewm',
    props: ['eSrc', 'sao', 'downlink'],
    data() {
      return {
        message:''
      }
    },
    methods: {
      addNewTodo: function () {

      },
      xiazai: function () {
        this.$emit('djClick', {aaa: '5', bol: '7'});

      }
    },
    created: function () {

    },
    mounted: function () {
      console.log(this.href)
    }
  }
</script>
<style type="text/css">
  * {
    box-sizeing: border-box;
  }

  .ewm-box {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin:5px auto;
  }

  .wenzi {
    font-size: 12px;
    margin-top: 0;
    text-align: center;
  }
  .btn-xz{
    width:100px;
    text-align: center;
  }
  .btn-xz a{
    font-family: 微软雅黑,宋体,Arial,Helvetica,Verdana,sans-serif;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    background: red;
    font-size: 12px;
    line-height: 20px;
    font-wieght:bold;
    padding: 5px 20px 5px 20px;
    -webkit-transition:all linear 0.30s;
    -moz-transition:all linear 0.30s;
    transition:all linear 0.30s;
  }
</style>
