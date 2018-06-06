<template>

    <div>
       <div id="login" v-if="type == 1">
            <h2 class="login-title">center</h2>
            <div class="login-box">
                <el-form  label-width="60px" class="demo-ruleForm">
                <el-form-item label="" >
                    <el-input type="text"  placeholder="请填写用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password"  placeholder="请填写密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="button">立即登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button  class="button">试玩</el-button>
                </el-form-item>
                </el-form>
                
            </div>
        </div>

        <!-- 登陆框在右边的 -->
        <div id="login"  v-if="type == 2">
            <div class="login-title" id="right">
                <h2>right</h2>
                <p></p>
            </div>
            <div class="login-box-right">
                <el-form  label-width="60px" class="demo-ruleForm">
                <el-form-item label="" >
                    <el-input type="text"  placeholder="请填写用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password"  placeholder="请填写密码"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button   type="primary" class="button" >立即登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button  class="button">试玩</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['type'],
        name:'dsLogin',
        data () {
            return {
            
            }
        },
        methods: {
            addNewTodo: function () {
            
            }
        }
    }
</script>

<style>
    #login{
        position: relative;
    }
    .login-box{
        width: 500px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 100px;
        margin-left: -250px;
    }
    .button{
        width: 442px;
    }
    .login-box-right{
        position: absolute;
        right:0;
    }
</style>

