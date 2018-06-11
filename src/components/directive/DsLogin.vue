<template>

    <div>
       <div id="login" >
            <div :class="[type==1?'login-box':'login-box2']" id="box">
                <el-form  label-width="60px" class="">
                    <el-form-item  >
                        <el-input prefix-icon="icon-account1" type="text"  placeholder="请填写用户名"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input type="password" prefix-icon="icon-Password"  placeholder="请填写密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="button"  >立即登录</el-button>
                    </el-form-item>
                    <el-form-item style="display:none">
                        <el-checkbox>我已阅读并同意</el-checkbox>
                        <el-button type="text">用户协议</el-button>
                    </el-form-item>
                    <el-form-item style="display:none">
                            <span>域名验证</span>
                            <span>联系客服</span>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox style="display:inline-block">记住密码</el-checkbox>
                        <span style="display:none">
                            <el-checkbox>同意</el-checkbox>
                            <span>协议与条款</span>
                        </span>
                        <el-button type="text" class="" >试玩</el-button>
                    </el-form-item>
                    <el-form-item :class="lianxi?'fade-show':'fade-hide'">
                        <buttonTabs></buttonTabs>
                    </el-form-item>
                </el-form>
                <lineCheck></lineCheck>
                
            </div>
            <dsLoginBottom></dsLoginBottom>
       </div>

    </div>
</template>

<script>
import dsLoginBottom from './dsLoginBottom'
import buttonTabs from './buttonTabs'
import lineCheck from './lineCheck/lineCheck'

export default {
  props:['type'],

  data() {
    return {
        lianxi:true
    };
  },
  components:{
      dsLoginBottom,
      buttonTabs,
      lineCheck
  },
  methods: {
    addNewTodo: function() { },

  }
};
</script>

<style>
#login {
  position: relative;
  top:20px;
}
.login-box {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 50%;
  margin-left: -250px;
}
.login-box2 {
  width: 500px;
  height: 300px;
  position: absolute;
  right:0;
  margin-left: -250px;
}
.button {
  width: 440px;
}
.bottom-text {
  position: absolute;
  bottom: -560px;
  left: 35%;
}
.fade-hide{
    display: none;
}
.fade-show{
    display: inline-block;
}
</style>

