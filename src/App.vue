<template>
  <div id="app">

     <router-link to='/login'>login</router-link>
     <router-link to='/ewm'>ewm</router-link>
     <router-link to='/phone'>phone</router-link>
     <router-link to='/zhuti'>zhuti</router-link>
    <div>
      <router-view> </router-view>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {},
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
      epicture: './static/ewm.png',
      downSrc: 'http://www.baidu.com',
      wenTitle: {
        width: 250,
        height: 50,
      },
      saoyisao: '扫一扫下载'
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
a{
 text-decoration: none;
  color:#fff;
  padding:5px;
  background:orange;
  border-radius: 5px;
  }
</style>
