<template>
  <div class="ewm-box">
    <div class="box-first">
      <div class="left-ewm">
        <div>
          <div class="ewm-pic-left">
            <img :src="listA.epicture" class="An-pic">
          </div>
          <div class="An-content">
            <p class="An-title">
              <i class="iconfont">
                &#xe71d;
              </i>
              {{listA.title}}</p>
            <p class="An-sao">{{listA.saoAn}}</p>
            <a class="btnAn" :href="listA.downSrcAn">{{listA.btnA}}</a>
          </div>
        </div>
      </div>

      <!--右边二维码-->
      <div class="right-ewm">
        <div class="ewm-pic-right">
          <img :src="listI.epicture" alt="" class="I-pic">
        </div>
        <div class="Iphone-content">
          <p class="I-title">
            <i class="iconfont">
              &#xe827;
            </i>
            {{listI.title}}
          </p>
          <p class="I-sao">{{listI.saoI}}</p>
          <a class="btnI" :href="listI.downSrcI">{{listI.btnI}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['listA','listI'],
    data () {
      return {

      }
    }
  }
</script>
<style>
  *{
    box-sizing: border-box;
  }
.ewm-box{
  width:600px;
  height:150px;
  color:#686868;
  background-color:#fff;
  border-radius: 8px;
  border:1px solid #000;
  margin-top:15px;
  position:relative;
  margin: 20px auto;

}
.box-first{
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-259px;
  margin-top:-52px;
}
.left-ewm{
  margin-right:25px;
}
  .left-ewm,.right-ewm,.ewm-pic-left,.ewm-pic-right,.Iphone-content,.An-content{
    display:inline-block;
  }

  .An-sao,.I-sao{
    font-size:10px;
    margin-top:5px;
    margin-bottom:5px;
  }
  .An-title,.I-title{
    margin-top:0;
    margin-bottom:8px;
  }

  .An-content,.Iphone-content{
    vertical-align: top;
  }
.btnAn,.btnI{
  width:140px;
  color:#fff;
  border-radius: 5px;
  border:0;
  height:30px;
  margin-top:8px;
  display: block;
  text-align: center;
  text-decoration: none;
  font-size:12px;
}
  .btnAn{
    background-color:#F87060;
  }
  .btnI{
    background-color:#01C5C4;
  }
</style>
