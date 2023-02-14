<!-- Header -->
<template>
  <div class="head-container">
    <div class="header-container">
      <img class="logoImg" src="@/assets/images/logo.png" alt="" />
      <img v-show="!showDown" class="headerImg" src='@/assets/images/header-right-icon.png' alt="" @click="changeDown"/>
      <img v-show="showDown" class="headerImg" src='@/assets/images/cancle-menu.png' alt="" @click="changeDown"/>
    </div>
    <div v-if="showDown" class="showDown">
      <van-button type="default" class="signInBtn" @click="router.push('/login')">Sign in</van-button>
      <van-button type="primary" class="createBtn">Create new account</van-button>
      <p>Influence people to earn</p>
    </div>
  </div>
</template>
<script lang="ts" setup>

import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const showDown = ref<boolean>(false);
const changeDown = () => {
  showDown.value = !showDown.value
}

</script>
<style lang="scss" scoped>
.head-container{
  position: relative;
  .header-container {
  box-sizing: border-box;
  width: 375px;
  background: #ff2658;
  position: relative;
  padding-left: 20px;
  padding-bottom: 13px;
  padding-top: 13px;
  display: flex;
  justify-content: space-between;
  .logoImg {
    width: 80px;
    height: 23px;
  }

  .headerImg {
    width: 29px;
    height: 29px;
    margin-right: 13px;
  }

  
}
  .showDown{
    width: 375px;
    height: 403px !important;
    background: #ff2658;
    position: absolute;
    top: 55px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      text-align: center;
      font-size: 15px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 18px;
      margin-top: 19px;
  }
  .signInBtn{
    width: 319px;
    height: 44px;
  }
  .createBtn{
    width: 319px;
height: 44px;
margin-top: 38px;
  }
}
}

</style>
