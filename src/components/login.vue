
<template>
    <div class="userLogin">
        <label for="userName"></label>
        <input type="text" placeholder="用户名" name="userName" class="userName" autocomplete="off">
        <label for="pwd"></label>
        <input type="password" placeholder="请输入密码" name="pwd" class="pwd" autocomplete="off">
        <button class="btn-login">立即登录</button>
        <p class="xieyi">
            <input type="checkbox" name="xieyi" id="xieyi">
            <label for="xieyi">我已阅读并同意</label>
            <span>&lt; 用户协议 &gt;</span>
        </p>
        <p class="remenber">
            <input type="checkbox" name="remenber" id="remenber">
            <label for="remenber">记住密码</label>
        </p>
        <div class="yumiing">
            <span>域名验证</span>
            <span>域名验证</span>
        </div>
        <button class="try">试玩</button>
        <buttonTabs></buttonTabs>
        <lineCheck></lineCheck>
        <dsLoginBottom></dsLoginBottom>
    </div>
</template>

<script>
import buttonTabs from './directive/buttonTabs'
import lineCheck from './directive/lineCheck/lineCheck'
import dsLoginBottom from './directive/dsLoginBottom'

 export default {
   data () {
     return {

     }
   },
   components: {
       buttonTabs,
       lineCheck,
       dsLoginBottom
   }
 }
</script>

<style lang="less" scope>

@login-width:500px;
@login-height:300px;
@input-width:350px;
@input-height:40px;

*{
    margin: 0;
    padding: 0;
}
.userLogin{
    position: relative;
    width: @login-width;
    height: @login-height;
    // text-align: center;
    margin: auto;
    lebel{
        margin:0;
        padding: 0;
        overflow: hidden;
    }
    .userName,.pwd{
        width:@input-width;
        height:@input-height;
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
        border: 2px solid #F0F0F0;
        margin-top: 8px;
        font-size: 16px;
        padding-left: 5px;
    }
    .btn-login,.try{
        width: @input-width;
        height: @input-height;
        text-align: center;
        line-height: @input-height;
        margin-top: 8px;
        background-color: #3AB2FF;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            background-color: rgb(159, 217, 255);
        }
        &:active{
            background-color: #3AB2FF;
        } 
    }
    .xieyi,.remenber{
        width: @input-width;
        font-size: 12px;
        margin-top: 5px;
        input{
           vertical-align:middle; 
           margin-top:-2px; 
           margin-bottom:1px; 
        }
        label,input{
            cursor: pointer;
        }
        span{
            color: pink;
            cursor: pointer;
        }
    }
    .yumiing{
        width: @input-width;
        height: @input-height;
        margin: auto;
        font-size: 14px;
        font-weight: 2px;
        color: blueviolet;
        margin-top: 20px;      
        &:first-child{
            border-right: 2px solid #000;
            margin-left: 30px;
            padding-right: 4px;
        }
        span{
            cursor: pointer;
        }
    }
}

</style>
