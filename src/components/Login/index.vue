<template>
<div class="login-page" v-has-header>
    <THeader :goBack="goBack" :close="true" :title="title"></THeader>
    <div v-show="title === '登录'">
        <form class="login-form" @submit.prevent="onSubmit">
            <div class="input-title">账号:</div>
            <input type="text" class="login-input" v-model="email" placeholder="请输入账号">
            <br>
            <div class="input-title">密码:</div>
            <input type="password" class="login-input" v-model="password" placeholder="请输入密码">
            <div class="forget-psw input-title" style="font-size: 14px">
                <span @click="forgetPsw()">忘记密码</span>
            </div>
            <TButton class="login-btn">登录</TButton>
            <div class="register input-title" style="font-size: 14px ">
                <span @click="register()">立即注册</span>
            </div>
        </form>
    </div>
    <div v-show="title === '忘记密码'">
        <form class="login-form" @submit.prevent="onSubmitChangePsw">
            <div class="input-title">账号:</div>
            <input type="text" class="login-input" v-model="email" placeholder="请输入账号">
            <br>
            <div class="input-title">密码:</div>
            <input type="password" class="login-input" v-model="forgetPassword" placeholder="请输入密码">
            <br>
            <div class="input-title">确认密码:</div>
            <input type="password" class="login-input" v-model="password" placeholder="请再次输入密码">
            <TButton class="login-btn">确认</TButton>
        </form>
    </div>
    <div v-show="title === '注册'">
        <form class="login-form" @submit.prevent="onSubmitChangePsw">
            <div class="input-title">账号:</div>
            <input type="text" class="login-input" v-model="email" placeholder="请输入账号">
            <br>
            <div class="input-title">密码:</div>
            <input type="password" class="login-input" v-model="forgetPassword" placeholder="请输入密码">
            <br>
            <div class="input-title">确认密码:</div>
            <input type="password" class="login-input" v-model="password" placeholder="请再次输入密码">
            <TButton class="login-btn">确认</TButton>
        </form>
    </div>

</div>
</template>

<script>
    import { mapActions , mapState } from 'vuex'
    import userTypes from './../../store/types/user';
    const  actions = mapActions({...userTypes});
    export default {
        name: "login",
        props: {
            $$modal: {
                type: Object,
                default: {}
            },
            success:{
                type:Function,
                default:()=>{}
            }
        },
        data() {
            return {
                ...actions,
                title:'登录',
                email: 'fxc0931',
                password:'123456',
                forgetPassword: ''
            }
        },
        computed:{
            ...mapState({
                userState: state => state.user
            })
        },
        methods: {
            goBack() {
                this.$$modal.show = false;
            },
            onSubmit(e) {
                let { email, password } = this;
                if (!email) return this.$PopUp.tip(`请输入账号`);
                if (!password) return this.$PopUp.tip(`请输入密码`);
                let data = {
                  email: 'fxc0931@sina.com',
                  password: '123456'
                }
              //   this.$http.post('https://newschain.herokuapp.com/users/login', data
              // ).then(function (response) {
              //         console.log(response, "111");
              //       })
              //       .catch(function (error) {
              //         console.log(error, '222');
              //       });
                // console.log('11', data);
                // this.$store.commit('login', data)
                this.login(data).then( data => {
                    this.success(this.goBack.bind(this),data);
                }).catch(err=>{
                    this.$PopUp.tip(err.error_msg);
                });
            },
            onSubmitChangePsw(e) {
              // let { account, password, forgetPassword } = this;
              // if (!account) return this.$PopUp.tip(`请输入账号`);
              // if (!forgetPassword) return this.$PopUp.tip(`请输入密码`);
              // if (password != forgetPassword) return this.$PopUp.tip(`两次输入密码不一致`);
            },
            forgetPsw() {
                this.title = "忘记密码";
            },
            register() {
              this.title = "注册";
            }
        }
    }
</script>
<style scoped lang="scss">
    .login-page {
        width: 100vm;
        height: 100vh;
        background-color: #fff;
        position: relative;
        margin-top: 100px;
    }
    .login-form {
        display: block;
        padding: 20px 16px;
        height: 100%;
    }
    .login-input {
        height: 35px;
        display: block;
        width: 100%;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        color: #999;
        &:focus {
            border-color: #FF5655;
        }
    }
    .login-btn {
        display: block;
        width: 100%;
        height: 46px;
        border-radius: 6px;
        font-size: 16px;
        margin-top: 30px;
    }
    .input-title {
        font-size: 16px;
        line-height: 30px;
        color: #666;
    }
    .forget-psw {
        float: right;
        margin-bottom: 5px;
    }
    .register {
        text-align: center;
        margin-bottom: 5px;
    }
</style>
