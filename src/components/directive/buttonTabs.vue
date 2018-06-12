<template>
    <div>
            <button type="danger">联系客服</button>
            <button type="info">域名验证</button>
            <button type="primary">IOS下载</button>
            <button type="success">安卓下载</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    components: {},

    methods: {}
}

</script>

<style lang="less" scoped>
@btn-width:100px;
@btn-height:40px;
button{
    width: @btn-width;
    height:@btn-height;
    cursor: pointer;
    text-align: center;
    line-height: 5px;
    padding: 12px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 5px;
    color: #fff;
    &:first-child{
        background-color: #3AB2FF;
        &:hover{
            background-color: rgb(159, 217, 255);
        }
        &:active{
            background-color: #3AB2FF;
        }
    }
    &:nth-child(2){
        background-color: #F0F0F0;
    }
    &:nth-child(3){
        background-color: red;
    }
    &:last-child{
        background-color: rgb(29, 221, 132);
    }
    
}
</style>
