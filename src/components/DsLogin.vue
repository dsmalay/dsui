<template>

    <div>
       <div id="login" >
            <div class="login-box" id="box">
                <el-form  label-width="60px" class="">
                    <el-form-item  >
                        <el-input prefix-icon="icon-account1" type="text"  placeholder="请填写用户名"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input type="password" prefix-icon="icon-Password" placeholder="请填写密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="button" >立即登录</el-button>
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
                        <el-radio style="display:none">记住密码</el-radio>
                        <span style="display:inlne-block">
                            <el-checkbox>同意</el-checkbox>
                            <span>协议与条款</span>
                        </span>
                        <el-button type="text" >试玩</el-button>
                    </el-form-item>
                </el-form>
                <el-tabs>
                    <el-button type="text">线路检测</el-button>
                    <el-button type="text">登录器下载</el-button>
                    <el-button type="text">手机端下载</el-button>
                    <el-button type="text">在线客服</el-button>
                </el-tabs>
            </div>
            <div class="bottom-text">
                <p>建议使用1366*768以上分辨率，并使用谷歌浏览器，火狐浏览器，IE9以上浏览器浏览本站</p>
                <el-tabs>
                    <el-button type="text">谷歌</el-button>
                    <el-button type="text">火狐</el-button>
                    <el-button type="text">IE</el-button>
                </el-tabs>
            </div>
       </div>

        <!-- 登陆框在右边的 -->
        <!-- <div id="login"  v-if="type == 2">
            <div>
                <h2>right</h2>
                <p></p>
            </div>
            <div class="login-box-right">
                <p>欢迎登陆***娱乐在线</p>
                <el-form  label-width="60px" class="demo-ruleForm">
                <el-form-item  >
                    <el-input type="text" prefix-icon="icon-gerenzhongxin" placeholder="请填写用户名"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input type="password" prefix-icon="icon-Password" placeholder="请填写密码"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button   type="primary" class="button" >立即登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button  class="button">试玩</el-button>
                </el-form-item>
                </el-form>
            </div>
            <div class="bottom-text">
                <p >建议使用1366*768以上分辨率，并使用谷歌浏览器，火狐浏览器，IE9以上浏览器浏览本站</p>
                
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  props: ["type"],
  name: "dsLogin",
  data() {
    return {
      
    }
  },
  mounted(){
      var r = document.getElementById("box");
      if(this.type == 1){
          r.style = "left:50%";
      }else if(this.type == 2){
        r.style = 'right:0';
      };
  },
  methods: {
    addNewTodo: function() {}
  }
};
</script>

<style>
#login {
  position: relative;
}
.login-box {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  /* left: 50%; */
  margin-top: 100px;
  margin-left: -250px;
}
.button {
  width: 442px;
}
.login-box-right {
  position: absolute;
  right: 0;
}
.bottom-text {
  position: absolute;
  bottom: -560px;
  left: 35%;
}
</style>

