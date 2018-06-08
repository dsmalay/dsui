<template>
	<div>
		 <phone1 :phone="{init,phonePage}" :wiClick='download'></phone1>
	</div>
</template>	

<script type="text/javascript">
	import phone1 from './directive/phone.vue'
	export default {
		components:{phone1},
        data(){
            return {
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
        download:function(){

            }
        },
      }
    


</script>

<style type="text/css">
	
</style>