<template>
  <div class="login-container login">
    <header class="header">
    </header>
    <div class="content">
         <h3 class="title">欢迎登录聚点商城运营后台</h3>
        <div class="picIcon"></div>
        <div class="loginRight">
            <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
                <el-form-item prop="userPhone">
                    <span class="svg-container">
                    <icon-svg icon-class="xinrenzhinan"></icon-svg>
                    </span>
                    <el-input name="userPhone" type="text" v-model="loginForm.userPhone" ref="userPhone" autoComplete="on" placeholder="手机号码"></el-input>
                </el-form-item>
                <el-form-item prop="userPassword">
                    <span class="svg-container">
                    <icon-svg icon-class="mima"></icon-svg>
                    </span>
                    <el-input name="userPassword" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.userPassword" autoComplete="on" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                    登录
                    </el-button>
                </el-form-item>
            </el-form>







        </div>
    </div>
    <footer class="footer">
      <span>Copyright©2018. 广州众咖信息科技服务有限公司 All Rights Reserved 粤ICP备18042113号</span> 
    </footer>
  </div>
</template>

<script>
    import {
        isWscnEmail
    } from '@/utils/validate';
    import {
        projectConfig
    } from '@/utils/projectConfig'

    export default {
        name: 'login',
        data() {
            const validateEmail = (rule, value, callback) => {
                if (value.length < 11) {
                    callback(new Error('请输入手机号码'));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('密码不能小于6位'));
                } else {
                    if (this.$refs.userPhone.value.length < 1) {
                        callback(new Error('密码错误'));
                    } else {
                        callback();
                    }
                }
            };
            return {
                loginForm: {
                    userPhone: '',
                    userPassword: '',
                    equipmentNo:'43846ad34489y4j4u8f8vcj1'
                },
                loginRules: {
                    userPhone: [{
                        required: true,
                        trigger: 'blur',
                        validator: validateEmail
                    }],
                    userPassword: [{
                        required: true,
                        trigger: 'blur',
                        validator: validatePass
                    }]
                },
                loading: false
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        // 点击,登录按钮,验证通过,请求登录
                        // 这里是用vuex的dispatch,触发Login action,
                        // /src/store/modules/user.js 这个文件配置了action的动作,以及登录成功后存储token
                        this.loading = true;

                        // 15989231237
                        // 13610368174
                        // 18310808142
                        // 18126823343

                        if (this.loginForm.userPhone != (process.env.ENV_NAME=='prod'?'18126823343':'18310808142')) {
                            this.$notify.error(
                                '账号错误'
                            )
                            this.loading = false;
                            return;
                        }
                        if (this.loginForm.userPassword != 'a123456b') {
                            this.$notify.error(
                                '密码错误'
                            )
                            this.loading = false;
                            return;
                        }

                        this.$store.dispatch('Login', this.loginForm).then(response => {
                            this.loading = false;
                            this.$router.push({
                                path: '/'
                            });
                        }).catch(() => {
                            this.loading = false;
                        });
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    .tips {
        font-size: 14px;
        color: #999;
        margin-bottom: 5px;
    }

    .login-container {
        @include relative;
        height: 100vh;
        background: url(../../assets/images/login-bg03.png) 50% 50%/cover no-repeat fixed;
        background-size: 100% 100%;
        background-color: #fff;
        width: 100%;
        position: absolute;
        .header {
            width: 100%;
            height: 34px;
            line-height: 34px;
            background: rgba(176, 174, 173, 0.25);

        }
        .loginLogo{
          width:105px;
          height: 30px;
          background: url(../../assets/images/logo.png);
          background-size: 105px 30px;
        }
        .header span {
            font-size: 14px;
            color:#666;
        }
        .header span:nth-of-type(1) {
            position: absolute;
            left: 2%;
        }
        .header span:nth-of-type(2) {
            position: absolute;
            right: 2%;
            top:1px;
        }
        .el-icon-message:before{
            margin-right:6px;
        }
        .header span {
            color:#c6c6c6;
        }
        .help-center{
            background: url(../../assets/images/help-center.png) no-repeat left center;
            padding-left:16px;
            background-size:14px 14px;
        }
        .content{
            width:100%;
            height:400px;
            background: url(../../assets/images/bg-center.png) no-repeat;
            background-size:100% 400px;
            position: relative;
            margin-top:66px;
            z-index:99;
        }
        .picIcon{
            width:44%;
            height: 220px;
            background: url(../../assets/images/222.png) no-repeat center right;
            float: left;
            background-size: 263px 220px;
            margin-top: 140px;
        }
        input {
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            color: #999;
            width:100%;
            height: 47px !important;
           line-height: 47px !important;
            background:none;
        }
        input:-webkit-autofill{
            background-color:#fff !important;
            background-image: none;
            color:#fff;
        }
        .el-input {
            display: inline-block;
            height: 47px !important;
            line-height: 47px !important;
            padding-left:42px;
            border-radius: 4px;
            text-align:right;
            box-sizing:border-box;
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: #fff;
            position: absolute;
            left: 0;
            top:0;
        }
        .title {
            font-size:1.6rem;
            font-weight:200;
            color: #d7d4d4;
            font-weight: bold;
            margin-top: -10px;
            position: absolute;
            top: 0;
            left:-22px;
            right: 0;
            text-align: center;
        }
        .loginRight{
            float: right;
            width:50%;
            text-align:left;
        }
        .login-form {
            width:240px;
            margin-top: 178px;
            background-color:#ffffff29;
        }
        .el-form-item {
           // border: 1px solid #ccc;
            border-radius:2px;
            color: #fff;
            background:#ffffff29;
        }
        .forget-pwd {
            color: #fff;
        }
        .el-button--primary {
            background: #0ba2d3;
            color: #fff;
            height:40px;
        }
        .el-button--primary:hover {
            background: #20a0ff;
            border: 1px solid #20a0ff;
            color: #fff;
        }
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        height: 34px;
        background:rgba(176, 174, 173, 0.25);
        line-height: 34px;
        color:#b8b6b6;
        font-size: 14px;
    }

    .login{

        .el-form-item {
            margin-bottom: 22px !important;
        }
    }
</style>
