<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view> </router-view>
    <div class="box">
      <router-link to='login'>login</router-link>
      <zhuti :tInit="wenTitle"></zhuti>
      <ewm :eSrc="epicture" :sao="saoyisao" v-on:djClick="dianji" :downlink="downSrc"></ewm>
      <ewm :eSrc="epicture" :sao="saoyisao" v-on:djClick="dianji" :downlink="downSrc"></ewm>
    </div>
    <phone :phone="{init,phonePage}" v-on:wiClick='download'></phone>
  </div>
 
</template>

<script>
import phone from './components/phone.vue'
import ewm from './components/ewm.vue'
import zhuti from './components/zhuti.vue'
import DsLogin from './components/DsLogin'
export default {
  name: 'App',
  components: {
    phone,
    ewm,
    zhuti,
    DsLogin
    
  },
   data() {
    return{
      init:{
        width:500,
        height:300,
      },
      phonePage:{
        wiSrc1:'./static/phone.png',
        epicture:'./static/ewm.png',

      },
       epicture:'./static/ewm.png',
       downSrc:'http://www.baidu.com',
       wenTitle:{
        width:250,
        height:50,
      },
      saoyisao:'扫一扫下载'
      }
  },
    methods:{
      download:function(v){
        console.log(v)
      },
      dianji:function(a){
        console.log(a)
      }
    },
    mounted:function(){
      // this.refs.xxx
    }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  display:inline-block;
  height:400px;
}
</style>
