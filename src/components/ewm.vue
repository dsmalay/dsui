<template>
	<div class="ewm-box">
		<img :src="eSrc">
		<p class="wenzi">{{sao}}</p>
		<a @click="xiazai" :href="downlink">下载</a>
		<!-- <span class="iconfont icon-anzhuo"></span> -->
	</div>
</template>
<script>
    export default {
        name:'ewm',
        props:['eSrc','sao','downlink'],
        data () {
            return {
            
            }
        },
        methods: {
            addNewTodo: function () {
            
            },
            xiazai:function(){
            	this.$emit('djClick',{aaa:'5',bol:'7'});

            }
        },
       	created:function(){
        	
        },
        mounted:function(){
        	console.log(this.href)
        }
    }
</script>
<style type="text/css">
	.ewm-box{
		width:100px;
		height:100px;
		display:inline-block;

	}
	.wenzi{
		font-size: 12px;
		margin-top:0;
		text-align: center;
	}
	a{
		text-decoration: none;
		color:#fff;
		width:60px;
		height:20px;
		text-align: center;
		background:red;
		font-size: 12px;
		display:inline-block;
		line-height: 20px;
	}
</style>