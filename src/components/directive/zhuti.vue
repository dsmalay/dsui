<template>
  <div class="title-box" :style="style">
    {{wenzi}}
  </div>
</template>
<script type="text/javascript">
  export default {
    props: ['Zhuti','wenzi'],
    data() {
      return {
        defaultStyle: {
          width: 200,
          height: 50,
          bg: '#fff'
        },
        style: ''
      }
    },
    created: function () {
      console.log(this.Zhuti)
      let v=this.Zhuti;
      let d=this.defaultStyle;
      this.style=`
        width:${v.width?v.width:d.width}px;
        height:${v.height?v.height:d.height}px;
      `
    },
  }
</script>
<style type="text/css">
  .title-box {

  }

  span {
    font-size: 25px;
    font-weight: bold;
    color: orange;
  }
</style>
