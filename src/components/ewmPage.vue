<template>
	<div>
		 <ewm :eSrc="epicture" :sao="saoyisao" :downlink="downSrc"></ewm>

	</div>
</template>

<script type="text/javascript">
	import ewm from './directive/ewm.vue'
	export default {
		components:{ewm},
		data () {
			return {
        epicture: './static/ewm.png',
        downSrc: 'http://www.baidu.com',
        saoyisao: '扫一扫下载'
      }
		}
	}

</script>

<style type="text/css">

</style>
