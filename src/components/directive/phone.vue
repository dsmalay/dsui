<!-- //这个组件如何使用 -->


<template>

	<p class="phone-box" :style="style" >
		<img v-if="phone.phonePage.wiSrc1" :src="phone.phonePage.wiSrc1" @click="imgClick">
	</p>

</template>
<script>
    export default {
        name:'phone',
        data () {
            return {
            	defaultStyle:{
            		width:50,
            		height:50,
            		bg:'#fff',
            	},
		        style:'',
		        src:'',

            }
        },
        props:['phone'],
        methods: {
        	// wiClick
            addNewTodo: function () {
            	
            },
            imgClick:function(){
            	this.$emit('wiClick',{res:'5',res2:[456,4564]})
            }
        },
       	created:function(){
       		//加载图片链接


       		let v = this.phone.init;
       		let d = this.defaultStyle;
        	this.style= {
        		width: (v.width?v.width:d.width)+'px',
        		height:(v.height?v.height:d.height) + 'px',
        		background: v.bgColor?v.bgColor:d.bg
        	} 	
        },
        mounted:function(){
        	console.log(this.wiInit)
        }
    }
</script>
<style type="text/css">
.phone-box{
	display: inline-block;
}
</style>
