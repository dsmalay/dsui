<template>
	<div>
		 <Zhuti :Zhuti="wenTitle" :wenzi="wenzi"></Zhuti>
	</div>
</template>

<script type="text/javascript">
  import Zhuti from "./directive/zhuti";
	export default {
		components:{Zhuti},
    data(){
		  return {
        wenTitle: {
          width: 250,
          height: 50,
        },
        wenzi:'实时购彩'
      }
    }

	}

</script>

<style type="text/css">

</style>
