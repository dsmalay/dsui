<template>
	<div class="title-box" :style="style">
		<span>随时随地</span>
		<span>畅玩游戏</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'zhuti',
		props:['tInit'],
		data () {
			return {
				defaultStyle:{
					width:200,
					height:50,
					bg:'#fff'
				},
				style:''
			}
		},
		created:function(){
       		//加载图片链接
       		console.log(this.tInit);
       		let a=this.tInit;
       		let d=this.defaultStyle;
        	this.style=`
        	width:${a.width?a.width:d.width}px;
        	height:${a.height?a.height:d.height}px;
        	background:${a.bgColor?a.bgColor:d.bg};
        	`	
        },
	}
</script>
<style type="text/css">
	.title-box{
		
		
	}
	span{
		font-size:25px;
		font-weight: bold;
		color:orange;
	}
</style>