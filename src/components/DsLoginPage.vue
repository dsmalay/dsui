
<template>
	<div>
		 <login :phone="{init,phonePage}" v-on:wiClick='download' class="login"></login>
	</div>
</template>

<script type="text/javascript">
	import login from './directive/Dslogin.vue'
	export default {
		components:{login},
    data(){
		  return{
        init:{
          width:500,
          height:300,
        },
        phonePage:{
          wiSrc1:'./static/phone.png',
          epicture:'./static/ewm.png',

        },
      }
    },
    methods:{
      download:function(v){
        console.log(v)
      },
    },
	}

</script>

<style type="text/css">
  .login{
    margin-left:00px;
    margin-left:100px;
  }

</style>
