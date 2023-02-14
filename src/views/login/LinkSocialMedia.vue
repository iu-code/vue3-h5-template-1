<template>
    <div class="linkMedia-container">
        <Header></Header>
        <div class="linkMedia-content">
            <div class="titleContent">
                <div class="top">
                    <h1>Link Your <br>Social Media</h1>
                    <img src="@/assets/images/influencer.png" alt="">
                </div>
            </div>
            <ul>
                <li>
                    <img src="@/assets/images/home-icon-twitter.png" alt="">
                    <p v-if="!twitterAuth" @click="empowerEvr(1)">Link</p>
                    <div class="hasAuth" v-else>
                        <div class="left">{{twitterName}}</div>
                        <div class="imgCotent">
                            <img src="@/assets/images/icon-trash.png" alt="" @click="handleDelPlatform(1)">
                            <img src="@/assets/images/icon-update.png" alt="" @click="empowerEvr2(1)">
                        </div>
                    </div>
                </li>
                <li>
                    <img src="@/assets/images/home-icon-ins.png" alt="">
                    <p v-if="!insAuth" @click="empowerEvr(2)">Link</p>
                    <div class="hasAuth" v-else>
                        <div class="left">{{insName}}</div>
                        <div class="imgCotent">
                            <img src="@/assets/images/icon-trash.png" alt="" @click="handleDelPlatform(2)">
                            <img src="@/assets/images/icon-update.png" alt="" @click="empowerEvr2(2)">
                        </div>
                    </div>
                </li>
                <li>
                    <img class="youtubeIcon" src="@/assets/images/home-icon-youtube.png" alt="">
                    <p v-if="!youtubeAuth">Link</p>
                    <div class="hasAuth" v-else>
                        <div class="left" @click="empowerEvr(3)">{{youtubeName}}</div>
                        <div class="imgCotent">
                            <img src="@/assets/images/icon-trash.png" alt="" @click="handleDelPlatform(3)">
                            <img src="@/assets/images/icon-update.png" alt="" @click="empowerEvr2(3)">
                        </div>
                    </div>
                </li>
                <li>
                    <img src="@/assets/images/home-icon-tiktok.png" alt="">
                    <p v-if="!tiktokAuth" @click="empowerEvr(4)">Link</p>
                    <div class="hasAuth" v-else>
                        <div class="left">{{tiktokName}}</div>
                        <div class="imgCotent">
                            <img src="@/assets/images/icon-trash.png" alt="" @click="handleDelPlatform(4)">
                            <img src="@/assets/images/icon-update.png" alt="" @click="empowerEvr2(4)">
                        </div>
                    </div>
                </li>
            </ul>
            <div class="buttonContent">
                <van-button class="back">Back</van-button>
                <van-button type="primary" class="createBtn" @click="handleNext">Submit</van-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
  </template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router';
import {Toast} from 'vant'
import {checkEmailFormat, checkPassword, getQueryString} from '@/utils/index'
import { getWalletCreate, getInfluencerOauthState, delByPlatform } from '@/api/login'
import {getInfluencerListByUser} from '@/api/authInfo'
import config from './config'

const twitterAuth = ref<boolean>(false)
const twitterName = ref<string>('')
const insAuth = ref<boolean>(false)
const insName = ref<string>('')
const youtubeAuth = ref<boolean>(false)
const youtubeName = ref<string>('')
const tiktokAuth = ref<boolean>(false)
const tiktokName = ref<string>('')

const result = ref()

const query = getQueryString()

const handleNext = () => {
    if (!tiktokAuth.value && !twitterAuth.value && !insAuth.value && !youtubeAuth.value) {
        Toast.fail('Please link at least 1 social media platform to procceed.')
      return
    } else {
      router.push('/influencerInfo')
    }
};

// 获取四个平台的认证状态
const getInfluncerListByUser = () => {
    getInfluencerListByUser().then(res => {
      if (res.length) {
        for (let i of res) {
          if (i.platform === 1) {
            tiktokName.value = 'Tiktok: ' + i.platformUserName
            tiktokAuth.value = true
          }
          if (i.platform === 2) {
            youtubeName.value = 'Tiktok: ' + i.platformUserName
            youtubeAuth.value = true
          }
          if (i.platform === 3) {
            insName.value = 'Tiktok: ' + i.platformUserName
            insAuth.value = true
          }
          if (i.platform === 4) {
            twitterName.value = 'Tiktok: ' + i.platformUserName
            twitterAuth.value = true
          }
        }
      }
    });
  }

// 点击授权
const empowerEvr = (type: number) => {
    if (!result.value) {
      Toast.fail('Result not obtained')
      return
    }
    const backUrl = window.location.protocol + '//' + window.location.host + window.location.pathname, thirdUrl = config.thirdUrl
    window.location.href = thirdUrl[type - 1] + result.value + '--' + backUrl + '?type=bind'
  };

// 点击change换绑
const empowerEvr2 = (type: number) => {
    if (!result.value) {
        Toast.fail('Result not obtained')
      return
    }
    let backUrl = window.location.protocol + '//' + window.location.host + window.location.pathname, thirdUrl = config.thirdUrl
    window.location.href = thirdUrl[type - 1] + result + '--' + backUrl + '?type=bind'
};

const handleDelPlatform = (plat: number) => {
    // 删除认证
    delByPlatform({ platform: plat });
    getInfluncerListByUser();
    location.reload()
};

onMounted(() => {
    if (query.type === 'bind') {
      getInfluncerListByUser();
      if (query.msg) {
        setTimeout(() => {
          Toast.fail(query.msg)
        }, 1000)
      }
    } else {
      getInfluncerListByUser();
    }
    getInfluencerOauthState().then(res => {
        result.value = res
    }).catch(err => Toast.fail(err))
})
  
  </script>
  <style lang="scss" scoped>
  .linkMedia-content{
    width: 375px;
    height: 892px;
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
                margin-left: 15px;
            }
            img{
                width: 191px;
                height: 188px;
                margin-top: 10px;
                margin-left: 9px;
            }
            
        }
    }

    ul{
        margin-top: 72px;
        margin-bottom: 98px;
        li{
            width: 332px;
            height: 73px;
            border-radius: 6px;
            margin: 0 auto 29px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .hasAuth{
                width: 290px;
                height: 73px;
                border-radius: 6px;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                box-sizing: border-box;
                align-items: center;
                background-color: #07C8CF;
                font-size: 14px;
                font-family: HelveticaNeue;
                color: #131313;
                img{
                    width: 18px;
                    height: 18px;
                }
                .imgCotent{
                    display: flex;
                }
            }
            img{
                width: 28px;
                height: 28px;
            }
            .youtubeIcon{
                height: 20px;
            }
            p{
                width: 290px;
                height: 73px;
                border-radius: 6px;
                text-align: center;
                line-height: 73px;
                // background: #F2F2F2;
                background-color: #fff;
                font-size: 14px;
                font-family: HelveticaNeue;
                color: #131313;
            }
            p:hover{
                background: #DBDBDB;
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
  