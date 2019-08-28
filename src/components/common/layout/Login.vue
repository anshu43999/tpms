<template>
    <div id="login" v-if="loginShow">
        <div class="login">
            <img src="../../../../public/static/images/index/logo.png" alt="" class="logo">
            <p class="title">山西省接处警信息统计分析系统</p>
            <form action="">
                <div class="userName">
                    <input type="text" placeholder="请输入用户名" v-model="username">
                    <i class="iconfont icon-yonghuming"></i>
                </div>
                <div class="passWord">
                    <input type="text" placeholder="请输入密码" v-model="username">
                    <i class="iconfont icon-mima"></i>
                </div>
                <div class="loginBtn">
                    <input type="submit" value="登录" class="submit">
                </div>
                <div class="link">
                    <router-link to="">暂不登录</router-link>
                </div>
            </form>
        </div>
        <div class="closeLogin" @click="close()">
            <i class="iconfont icon-cuowu"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                username:'',
                password:'',
                page: 'login'
            }
        },
        props:['loginShow'],
        methods:{
            close(){
                this.$emit('close',this.page)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/style/fonts/iconfont.css";
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    #login {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;

        .login {
            width: 5.78rem;
            height: 6.49rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;

            .logo{
                width: 1.1rem;
                height: 1.12rem;
                display: block;
                margin: auto;
            }

            .title {
                font-size: 0.4rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                text-align: center;
            }

            form{
                width: 4.8rem;
                height: 3.64rem;
                margin: 0.82rem auto 0;

                .userName,.passWord,.loginBtn{
                    width: 100%;
                    height: 0.6rem;
                    background: #2dc0e8;
                    position: relative;
                    margin-bottom: 0.4rem;

                    input{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        border: none;
                        border-radius: 0.04rem;
                        padding-left: 0.6rem;
                        font-size: 0.18rem;
                    }

                    .icon-yonghuming,.icon-mima{
                        position: absolute;
                        top: 50%;
                        left: 0.17rem;
                        transform: translateY(-50%);
                        font-size: 0.28rem;
                        color: rgb(102,102,102);
                    }
                }

                .loginBtn{
                    margin-top: 0.5rem;
                    margin-bottom: 0.21rem;

                    .submit{
                        padding: 0;
                        background-image: linear-gradient(90deg,
                                rgba(18, 35, 63, 1) 0%,
                                rgba(12, 20, 34, 1) 100%);
                        border-radius: 4px;
                        border: solid 2px rgba(255, 255, 255, 0.6);
                        font-size: 20px;
                        color: #fff;
                    }
                }

                .link{
                    text-align: center;

                    a{
                        text-decoration: underline;
                        color: rgba(255,255,255,0.7);
                        font-size: 0.14rem;
                    }
                }
            }
        }

        .closeLogin{
            width: 0.4rem;
            height: 0.4rem;
            position: absolute;
            right: 0.3rem;
            top: 0.3rem;

            .icon-cuowu{
                font-size: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                color: rgba(255,255,255,0.7);
            }
        }
    }
</style>