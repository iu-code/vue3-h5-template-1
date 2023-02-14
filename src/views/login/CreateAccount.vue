<template>
    <div class="createAccount-container">
        <Header></Header>
        <div class="createAccount-content">
            <div class="titleContent">
                <div class="top">
                    <h1>Create Your <br> Account</h1>
                    <img src="@/assets/images/influencer.png" alt="">
                </div>
                <div class="bottom">
                    Already have an Influencer account? <span>Log in</span> directly to IdolEco Influencer account.
                </div>
            </div>
            <div class="formContent">
                <div class="labelTitle">
                    Invitation code
                </div>
                <input type="text" placeholder="Invitation code" style="margin-bottom: 7px;" maxlength="4" v-model="invitationCode">
                <p>Didn`t get a code?Go to our Discord.</p>
                <div class="labelTitle">
                    Email
                </div>
                <input type="text" placeholder="Email" style="margin-bottom: 25px;" v-model="email">
                <div class="labelTitle">
                    Verification code
                </div>
                <div class="codeContent">
                    <input type="text" placeholder="Enter 6-digit code" style="margin-bottom: 6px;" v-model="verificationCode">
                    <p :disabled="!inviteCode" @click="sendMsgAction">{{(`${smsBtnText}`)}} {{smsBtnText === 'regain' ? beginTime + 'S' : '' }}</p>
                </div>
                <p class="notGetCode">Didn't get a code?</p>
                <div class="labelTitle">
                    Password
                </div>
                <div class="passwordContent">
                    <input :type="isHidden ? 'password' : 'text'" placeholder="Enter password" style="margin-bottom: 25px;" v-model="password">
                    <van-icon v-if="isHidden" class="eye" name="eye-o" @click="isHidden = !isHidden"/>
                    <van-icon v-else class="eye" name="closed-eye" @click="isHidden = !isHidden"/>
                </div>
                <div class="labelTitle">
                    Re-enter Password
                </div>
                <div class="rePasswordContent">
                    <input :type="isHidden ? 'password' : 'text'" placeholder="Enter re-enter password" style="margin-bottom: 25px;" v-model="rePassword">
                    <van-icon v-if="isHidden" class="eye" name="eye-o" @click="isHidden = !isHidden"/>
                    <van-icon v-else class="eye" name="closed-eye" @click="isHidden = !isHidden"/>
                </div>
            </div>
            <div class="agreementContent">
                <div class="item">
                    <img v-if="agree1" src="@/assets/images/checkbox-checked.png" alt="" @click="agree1 = !agree1">
                    <img v-else src="@/assets/images/checkbox-default.png" alt="" @click="agree1 = !agree1">
                    <div>
                        By clicking here, you agree to the <span>IdolEco Commercial Terms of Service</span> and acknowledge you have read the <span>IdolEco for business Privacy Policy</span> to learn how we collect, use and share your data.
                    </div>
                </div>
                <div class="item">
                    <img v-if="agree2" src="@/assets/images/checkbox-checked.png" alt="" @click="agree2 = !agree2" >
                    <img v-else src="@/assets/images/checkbox-default.png" alt="" @click="agree2 = !agree2">
                    <div>
                        IdolEco for Business may send you emails and messages with news, events, promotional infomation, and updates. You may opt out at any time in your user settings.
                    </div>
                </div>
            </div>
            <van-button type="primary" class="createBtn" @click="registNow">Create account</van-button>
        </div>
        <Footer></Footer>
    </div>
  </template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router';
import {Toast} from 'vant'
import {checkEmailFormat, checkPassword} from '@/utils/index'
import { sendMsg, authRegister, authLogin } from '@/api/login'
import { checkReferralCode } from '@/api/referrer'

const email = ref('')
const password = ref('')
const rePassword = ref('')
const invitationCode = ref('')
const verificationCode = ref('')
const inviteCode = ref('')

const agree1 = ref<boolean>(true)
const agree2 = ref<boolean>(true)

const isHidden = ref<boolean>(true)
const smsBtnText = ref('getCode')
const isSendTimer = ref(false)
const beginTime = ref(0)
const timerObj = ref()

const isInfluencerRegister = () => {
    return userType === 'influencer'
  }
  const getUserTypeText = () => {
    return userType === 'merchant' ? 'Ads Manager' : 'Influencer'
  }

// 倒计时
function countdown () {
  let msec:any = beginTime.value - 1
  if (msec <= 0) {
    smsBtnText.value = 'getCode'
    isSendTimer.value = false
    clearInterval(timerObj.value)
    return
  }
  // 个位数前补零
  msec = msec > 9 ? msec : '0' + msec
  beginTime.value = msec
}
function startTimer () {
  isSendTimer.value = true
  beginTime.value = 60
  smsBtnText.value = 'regain'
  timerObj.value = setInterval(() => {
    countdown()
  }, 1000)
}

// 发送验证码
async function sendMsgAction () {
  if (isSendTimer.value) return
  const checkEmail = checkEmailFormat(email.value)
  if (!checkEmail.pass) {
    Toast.fail(checkEmail.msg)
    return
  }
  const params = {
      email: (checkEmail.email as string).trim(),
      type: 'register'
    }
  smsBtnText.value = 'loading'
  isSendTimer.value = true
  sendMsg(params).then(() => {
    startTimer()
    Toast.success(('sendSuccessfully'))
  }).catch((err) => {
    smsBtnText.value = 'getCode'
    isSendTimer.value = false
    Toast.fail(err.message)
  })
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

// 注册
const registNow = async () => {
    const res:any = await checkReferralCode({code: invitationCode.value})
    if (!res) {
        Toast.fail('This is an invalid Referral Code.')
      return false
    }
  const checkEmail = checkEmailFormat(email.value)
  if (!checkEmail.pass) {
    Toast.fail(checkEmail.msg)
    return
  }
  if (!checkPassword(password.value)) {
    Toast.fail('Password must be at least 8 characters, 1 letter and 1 number.')
    return
  }
  if (!agree1.value) {
    Toast.fail('Please tick the IdolEco Commercial Terms of Service and the IdolEco for Influencer Privacy Policy')
      return
    }
    if (!agree2.value) {
        Toast.fail('Please tick the IdolEco emails and messages terms')
      return
    }
    authRegister({
      email: email.value,
      inviteCode: invitationCode.value,
      password: password.value,
      userType: 'influencer',
      verifyCode: verificationCode.value
    }).then(res => {
      console.log('[ res ] >', res)
      handleSignIn({
        email: email.value,
        password: password.value
      })
      localStorage.setItem('influencerSignUp', JSON.stringify({
        email: email.value,
        inviteCode: invitationCode.value,
        password: password.value,
        userType: 'influencer',
        verifyCode: verificationCode.value
      }))
      Toast.success('IdolEco account created')
      router.push('/createWallet')
    }).catch(err => console.log('[ err ] >', err))
}

  
  </script>
  <style lang="scss" scoped>
  .createAccount-content{
    width: 375px;
    height: 1140px;
    background: #f0f2f5;
    box-sizing: border-box;
    .titleContent{
        .top{
            display: flex;
            h1{
                font-size: 25px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                color: #131313;
                margin-top: 128px;
                margin-left: 29px;
            }
            img{
                width: 191px;
                height: 188px;
                margin-top: 10px;
                margin-left: 9px;
            }
            
        }
        .bottom{
                font-size: 15px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                color: #131313;
                line-height: 18px;
                margin-top: 26px;
                margin-left: 29px;
                margin-bottom: 53px;
                span{
                    color: #07C8CF ;
                    font-size: 15px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                }
            }
    }
    .formContent{
        box-sizing: border-box;
        padding-left: 19px;
        .labelTitle{
            font-size: 15px;
            font-family: HelveticaNeue-Bold, HelveticaNeue;
            font-weight: bold;
            color: #131313;
            line-height: 18px;
            margin-bottom: 7px;
        }
        p{
            font-size: 14px;
            font-family: HelveticaNeue;
            color: #000000;
            line-height: 16px;
            margin-bottom: 26px;
        }
        .notGetCode{
            color: #07C8CF;
        }
        .passwordContent{
            position: relative;
            .eye{
                position: absolute;
                top: 4px;
                right: 30px;
            }
        }
        .rePasswordContent{
            position: relative;
            .eye{
                position: absolute;
                top: 4px;
                right: 30px;
            }
        }
        .codeContent{
            position: relative;
            p{
                position: absolute;
                top: 7px;
                right: 40px;
                font-size: 14px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                color: #07C8CF;
                line-height: 17px;
            }
        }
    }
    .agreementContent{
        .item{
            box-sizing: border-box;
            padding: 0 27px 19px;
            display: flex;
            justify-content: space-between;
            img{
                width: 18px;
                height: 19px;
                margin-right: 9px;
            }
            div{
                width: 302px;
                height: 87px;
                font-size: 13px;
                font-family: HelveticaNeue;
                color: #000000;
                line-height: 14px;
                span{
                    color: #07C8CF;
                }
            }
        }
        
    }
    .createBtn{
        width: 332px;
        height: 44px;
        font-size: 15px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 18px;
        letter-spacing: 1px;
        margin-left: 22px;
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
  