
<template>
	<div>
		 <phone :phone="{init,phonePage}" v-on:wiClick='download'></phone>
	</div>
</template>

<script type="text/javascript">
	import phone from './directive/phone.vue'
	export default {
		components:{phone},
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

</style>
