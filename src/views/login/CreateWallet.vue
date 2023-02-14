<template>
    <div class="createWallet-container">
        <Header></Header>
        <div class="createWallet-content">
            <div class="titleContent">
                <div class="top">
                    <h1>Create Your <br> Wallet</h1>
                    <img src="@/assets/images/influencer.png" alt="">
                </div>
                <div class="bottom">
                    Create your wallet to receive commercial orders income and pay fees on our platform. The payment password is essential for withdrawal and payment.
                </div>
            </div>
            <div class="formContent">
                <div class="labelTitle">
                    Wallet name
                </div>
                <input type="text" placeholder="Enter 6-20 Characters" style="margin-bottom: 28px;" v-model="walletName">
                <div class="labelTitle">
                    Payment password
                </div>
                <div class="passwordContent">
                    <input :type="isHidden ? 'password' : 'text'" placeholder="Enter password" style="margin-bottom: 27px;" v-model="password">
                    <van-icon v-if="isHidden" class="eye" name="eye-o" @click="isHidden = !isHidden"/>
                    <van-icon v-else class="eye" name="closed-eye" @click="isHidden = !isHidden"/>
                </div>
                <div class="labelTitle">
                    Re-enter Password
                </div>
                <div class="rePasswordContent">
                    <input :type="isHidden ? 'password' : 'text'" placeholder="Enter re-enter password" style="margin-bottom: 98px;" v-model="rePassword">
                    <van-icon v-if="isHidden" class="eye" name="eye-o" @click="isHidden = !isHidden"/>
                    <van-icon v-else class="eye" name="closed-eye" @click="isHidden = !isHidden"/>
                </div>
            </div>
            <div class="buttonContent">
                <van-button class="back">Back</van-button>
                <van-button type="primary" class="createBtn" @click="walletCreate">Next</van-button>
            </div>
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
import { getWalletCreate } from '@/api/login'

const walletName = ref('')
const password = ref('')
const rePassword = ref('')
const isHidden = ref<boolean>(true)

const walletCreate = async () => {
  if (password.value !== rePassword.value) {
    Toast.fail('The passwords entered twice are inconsistent')
    return
  }
  if (!checkPassword(password.value)) {
    Toast.fail('Password must be at least 8 characters, 1 letter and 1 number.')
    return
  }
  if (!/^[\da-zA-Z]{1,12}$/.test(walletName.value)) {
    Toast.fail('The wallet name can only contain letters and numbers no special characters')
    return
  }
  await getWalletCreate({
    name: walletName.value,
    password: password.value
  })
  router.push('/linkSocialMedia')
}

  
  </script>
  <style lang="scss" scoped>
  .createWallet-content{
    width: 375px;
    height: 792px;
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
                margin-right: 22px;
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
    .buttonContent{
        display: flex;
        .back{
        background: #F2F2F2 !important;
        color: #131313 !important;
        width: 162px;
        height: 44px;
        font-size: 15px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        line-height: 18px;
        letter-spacing: 1px;
        margin-left: 22px;
    }
    }
    .createBtn{
        width: 162px;
        height: 44px;
        font-size: 15px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 18px;
        letter-spacing: 1px;
        margin-left: 7px;
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
  