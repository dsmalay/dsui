<template>
  <div>
    <lrewm :listA="listA" :listI="listI"></lrewm>

  </div>
</template>

<script type="text/javascript">
  import lrewm from './directive/lrewm.vue'
  export default {
    components:{lrewm},
    data () {
      return {
        listA:{
          title:'安卓下载',
          epicture: './static/ewm.png',
          downSrcAn: 'http://www.baidu.com',
          saoAn: '扫一扫下载安卓手机端',
          btnA:'安卓手机端下载'
        },
        listI:{
          title:'ios下载',
          epicture: './static/ewm.png',
          downSrcI: 'http://www.baidu.com',
          saoI: '扫一扫下载ios手机端',
          btnI:'安卓手机端下载'
        },
      }
    }
  }

</script>

<style type="text/css">

</style>
