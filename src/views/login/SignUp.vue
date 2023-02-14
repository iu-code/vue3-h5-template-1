<template>
    <div class="signUp-container">
        <Header></Header>
        <div class="signUp-content">
            <div class="item">
                <img class="adsImg" src="@/assets/images/ads-manager.png" alt="">
                <h1>Ads Manager</h1>
            </div>
            <div class="item">
                <img class="influencerImg" src="@/assets/images/influencer.png" alt="" @click="router.push('/createAccount')">
                <h1>Influencer</h1>
            </div>
            <div class="item">
                <img class="mcnImg" src="@/assets/images/mcn-owner.png" alt="">
                <h1>MCN Owner</h1>
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
  
  </script>
  <style lang="scss" scoped>
  .signUp-content{
    width: 375px;
    height: 536px;
    background: #f0f2f5;
    box-sizing: border-box;
    padding: 23px 12px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
        width: 171px;
        height: 235px;
        background: #FFFFFF;
        box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.08);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .adsImg{
            width: 82px;
            height: 155px;
            margin-top: 18px;
            margin-bottom: 22px;
        }
        .influencerImg{
            width: 166px;
            height: 163px;
            margin-top: 13px;
            margin-bottom: 19px;
        }
        .mcnImg{
            width: 145px;
            height: 163px;
            margin-top: 13px;
            margin-bottom: 19px;
        }
        h1{
            font-size: 15px;
            font-family: HelveticaNeue-Bold, HelveticaNeue;
            font-weight: bold;
            color: #131313;
        }
    }
}
  </style>
  