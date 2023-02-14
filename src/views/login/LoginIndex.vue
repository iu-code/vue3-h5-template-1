<template>
    <div class="login-container">
        <Header></Header>
        <div class="login-content">
            <h1>Welcome Back !</h1>
            <input type="text" placeholder="Email" style="margin-bottom: 25px;" v-model="email">
            <input type="text" placeholder="Password" v-model="password">
            <van-button type="default" class="signInBtn" @click="loginAction">Sign in</van-button>
            <div class="forget">Forgot password?</div>
            <div class="line"></div>
            <van-button type="primary" class="createBtn" @click="router.push('/signUp')">Create new account</van-button>
        </div>
        <Footer></Footer>
    </div>
  </template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {checkEmailFormat} from '@/utils/index'
import router from '@/router';
import {authLogin} from '@/api/login'
import { Toast } from 'vant';

const email = ref('')
const password = ref('')

interface loginParams {
    email: string
    password?: string
    captcha?: string
  }

function loginAction () {
  const checkEmail = checkEmailFormat(email.value)
  if (!checkEmail.pass) {
    Toast.fail(checkEmail.msg)
    return
  }
  const params: loginParams = {
    email: (checkEmail.email as string).trim(),
    password: password.value,
  }
  handleSignIn(params)
}

const handleSignIn = (params: any) => {
  authLogin(params).then((res: any) => {
    console.log('%c [ res ]-50', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      if (res.userInfo && !res.userInfo.userType) {
        res.userInfo.userType = res.userType ? res.userType : 'influencer'
      }
      window.localStorage.setItem('accessToken', res.token)
      window.localStorage.setItem('SysUserinfo', JSON.stringify(res.userInfo))
      window.localStorage.setItem('hadAuth', '0')
      window.localStorage.setItem('walletName', res.walletName)
      //   user.setUser(res.userInfo as any)
      //登录后必须用window.location.href跳转
      if (res.userType === 'influencer') {
        if (!res.hasWallet) { // false 没有创建钱包。去创建钱包
          window.location.href = '/createWallet'
        } else if (!res.influencerCount) { // 0 未认证。去认证
          window.location.href = '/authInfo'
        } else { // 登录成功
          window.localStorage.setItem('hadAuth', '1') // 可以正常登录的都是认证完的。没有认证完的需要认证完才可以登录系统
          window.location.href = '/'
        }
      } else if (res.userType === 'merchant') {
          window.localStorage.setItem('hadAuth', '1') // 可以正常登录的都是认证完的。没有认证完的需要认证完才可以登录系统
          window.location.href = '/'
      }
    })
    
}
  
  </script>
  <style lang="scss" scoped>
  .login-content{
    width: 375px;
    height: 536px;
    background: #f0f2f5;
    padding: 57px 24px 0;
    box-sizing: border-box;
    h1{
        font-size: 25px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #131313;
        line-height: 31px;
        margin-bottom: 31px;
    }
    .signInBtn{
    width: 319px;
    height: 44px;
    margin-top: 40px;
  }
  .createBtn{
    width: 319px;
    height: 44px;
    margin-top: 38px;
  }
  .forget{
    font-size: 15px;
    font-family: HelveticaNeue-Bold, HelveticaNeue;
    font-weight: bold;
    color: #07C8CF;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 25px;
  }
  .line{
    width: 333px;
    height: 1px;
    background: #cfcfcf;
    margin-top: 30px;
  }
  }
  input{
    width: 332px;
    height: 33px;
    background: #F2F2F2;
    border-radius: 4px;
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #131313;
    line-height: 19px;
    padding: 7px 13px;
    box-sizing: border-box;
  }
  </style>
  