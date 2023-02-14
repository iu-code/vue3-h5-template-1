<template>
    <div class="influencerInfo-container">
        <Header></Header>
        <div class="influencerInfo-content">
            <div class="titleContent">
                <div class="top">
                    <h1>For personalized<br>experience on <br>IdolEco, fill in the <br>required fileds</h1>
                    <img src="@/assets/images/influencer.png" alt="">
                </div>
            </div>
            <div class="formContent">
                <h2 class="labelTitle">Your Location</h2>
                <div class="labelTitle">Business Country or region</div>
                <select placeholder="Select your country or region" v-model="countryList">
                    <option v-for="item in country" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
                <div class="labelTitle">Primary language</div>
                <select placeholder="Select your primary language" >
                    <option v-for="item in language" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
                <div class="labelTitle">Secondary language</div>
                <select placeholder="Select your secondary language" >
                    <option v-for="item in language" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
                <div class="labelTitle">Time zone</div>
                <select placeholder="Select your time zone" v-model="timeZoneList">
                    <option v-for="item in timeZone" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
                <div class="labelTitle">Social Tags</div>
                <select placeholder="Select 3 social Tags" v-model="socialTagList">
                    <option v-for="item in socialTags" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
                <h3 class="labelTitle">Primary contact</h3>
                <div class="labelTitle">Contact name</div>
                <input type="text" placeholder="Contact name" v-model="contactName">
                <div class="labelTitle">Email</div>
                <input type="text" placeholder="Email" v-model="email">
                <div class="labelTitle">Phone number</div>
                <div class="phoneContent">
                    <select class="phone" v-model="phoneCountryCode">
                        <option v-for="item in areaCode" :value="item.label" :key="item.value">{{ item.label }}</option>
                    </select>
                    <input type="text" class="number" v-model="phoneNumber">
                </div>
            </div>
            <div class="buttonContent">
                <van-button class="back">Back</van-button>
                <van-button type="primary" class="createBtn" @click="handleSubmit">Submit</van-button>
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
import {checkEmailFormat, checkPassword, getQueryString, checkContactName} from '@/utils/index'
import { getWalletCreate, getInfluencerOauthState, delByPlatform } from '@/api/login'
import { getCountryDic, getSocialTagDic, getLanguageDic, getTimezoneDic, getSaveOrUpdateUserInfo } from '@/api/authInfo'
import config from './config'

const tiktokAuth = ref<boolean>(false)
const tiktokName = ref<string>('')

const country = ref()
const language = ref()
const timeZone = ref()
const areaCode = ref()
const socialTags = ref()

const countryList = ref()
const languageList = ref()
const timeZoneList = ref()
const socialTagList = ref()
const contactName = ref('')
const phoneCountryCode = ref()
const email = ref('')
const phoneNumber = ref('')

const getCountryDict = async () => {
    const res = await  getCountryDic();
    const options: Array<{ value: number, label: string, id: number }> = [];
    res?.map((item: any) => {
      options.push({
        label: item.val,
        value: item.id,
        id: item.id
      });
    });
    country.value = options
    return options;
  }

  const getLanguageDict = async () => {
    const res = await  getLanguageDic();
    const options: Array<{ value: number, label: string, id: number }> = [];
    res?.map((item: any) => {
      options.push({
        label: item.val,
        value: item.id,
        id: item.id
      });
    });
    language.value = options
    return options;
  }

  const getTimeZoneDict = async () => {
    const res = await  getTimezoneDic();
    const options: Array<{ value: number, label: string, id: number }> = [];
    res?.map((item: any) => {
      options.push({
        label: 'UTC' + item.val + ' ' + item.name,
        value: item.id,
        id: item.id
      });
    });
    timeZone.value = options
    return options;
  }

  const getSocialTagDict = async () => {
    const res = await  getSocialTagDic();
    const options: Array<{ value: number, label: string, id: number }> = [];
    res?.map((item: any) => {
      options.push({
        label: item.val,
        value: item.id,
        id: item.id
      });
    });
    socialTags.value = options
    return options;
  }

  const getAreaCodeDict = async () => {
    const areaCodeList = config.contryCode.map((item) => {
      return { value: item, label: item }
    });
    areaCode.value = areaCodeList
  }

const handleSubmit = async () => {
    const checkEmail = checkEmailFormat(email.value)
    if (!checkEmail.pass) {
      Toast.fail(checkEmail.msg)
      return
    }
    const checkName = checkContactName(contactName.value)
    if (!checkName.pass) {
      Toast.fail(checkName.msg)
      return
    }
    // 校验
    if (!countryList.value.id || !languageList.value.length || !timeZoneList.value.id || !socialTagList.value.length) {
      Toast.fail('Please complete the information')
      return
    }
    if (phoneNumber.value) {
      if (!(/^[-\+0-9\(\)]{1,20}$/).test(phoneNumber.value)) {
        Toast.fail('Please fill in the correct mobile number')
        return
      }
      if (!phoneCountryCode.value) {
        Toast.fail('Please select the phoneCountryCode')
        return
      }
    }
    console.log('%c [ socialTagList.value ]-160', 'font-size:13px; background:pink; color:#bf2c9f;', socialTagList.value)
        console.log('%c [ timeZoneList.value ]-160', 'font-size:13px; background:pink; color:#bf2c9f;', timeZoneList.value)
        console.log('%c [ languageList.value ]-160', 'font-size:13px; background:pink; color:#bf2c9f;', languageList.value)
        console.log('%c [ countryList.value ]-160', 'font-size:13px; background:pink; color:#bf2c9f;', countryList.value)
    // await getSaveOrUpdateUserInfo({
    //   contactName: contactName.value,
    //   countryDic: countryList.value,
    //   email,
    //   socialMediaTagList: socialTagList,
    //   languageList: languageDicInfo,
    //   phoneCountryCode,
    //   phoneNumber,
    //   timeZoneDic: timezoneDicInfo,
    //   facebookMessage,
    //   whatsApp: whatsAppName
    // })
    // message.success('Submit success')
    // history.push('/influencer/explore')
}

onMounted(() => {
    getCountryDict();
    getLanguageDict();
    getTimeZoneDict();
    getSocialTagDict();
    getAreaCodeDict();
})
  
  </script>
  <style lang="scss" scoped>
  .influencerInfo-content{
    width: 375px;
    height: 1300px;
    background: #f0f2f5;
    box-sizing: border-box;
    .titleContent{
        .top{
            display: flex;
            h1{
                font-size: 17px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                color: #131313;
                margin-top: 128px;
                margin-left: 24px;
            }
            img{
                width: 191px;
                height: 188px;
                margin-top: 10px;
                margin-left: 9px;
            }
            
        }
    }
    .formContent{
        margin-top: 60px;
        margin-bottom: 43px;
        box-sizing: border-box;
        padding-left: 18px;
        .phoneContent{
            display: flex;
            .phone{
                width: 68px;
                height: 33px;
                margin-right: 5px;
            }
            .number{
                width: 259px;
                height: 33px;
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
    margin-bottom: 28px;
  }
  select{
    width: 332px;
    height: 33px;
    background: #F2F2F2;
    border-radius: 4px;
    border: none;
    margin-bottom: 28px;
  }
  .labelTitle{
    font-size: 15px;
    font-family: HelveticaNeue-Bold, HelveticaNeue;
    font-weight: bold;
    color: #131313;
    line-height: 18px;
    margin-bottom: 7px;
  }
  h2{
    margin-bottom: 34px !important;
  }
  h3{
    margin-bottom: 34px !important;
    margin-top: 59px;
  }
  </style>
  