<!-- Home -->
<template>
  <div class="home-container">
    <div class="warpper">
      <div class="titleContainer">
        BUILD A FASCINATING INFLUENCE ECOSYSTEM IN WEB3
      </div>
      <div class="desc">
        Seeking out local influencer around the world, to tell story in a local way that local people will listen to
      </div>
      <button class="startBtn">START NOW</button>
      <p>Influence people to earn</p>
      <div class="influencerContainer">
        <img src="@/assets/images/home-icon-1.png" alt="">
        <div class="textContent">
          <div>Influencer</div>
          <div style="margin-top: 8px;">Influencer Power</div>
        </div>
        <div class="numContent">
          <div>50000</div>
          <div style="margin-top: 6px;">50000</div>
        </div>
      </div>
      <div class="camAndFans">
        <div class="left">
          <img src="@/assets/images/home-icon-2.png" alt="">
          <div>
            <h3>Campaigns</h3>
            <h4>328</h4>
          </div>
          <div>
            <h3>Total Commision</h3>
            <h4>USDT 50000</h4>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/images/home-icon-3.png" alt="">
          <div>
            <h3>Fans</h3>
            <h4>328</h4>
          </div>
          <div>
            <h3>IDOLE</h3>
            <h4>50000</h4>
          </div>
        </div>
      </div>
      <div class="platforms">
        <div style="margin-right: 12px; display: flex;">
          <div class="platItem" style="margin-right: 12px">
          <img src="@/assets/images/home-icon-tiktok.png" alt="">
          <h5>12000</h5>
        </div>
        <div class="platItem">
          <img src="@/assets/images/home-icon-twitter.png" alt="">
          <h5>12000</h5>
        </div>
        </div>
        <div style=" display: flex;">
          <div class="platItem" style="margin-right: 12px">
          <img src="@/assets/images/home-icon-ins.png" alt="">
          <h5>12000</h5>
        </div>
        <div class="platItem">
          <img class="youtubeIcon" src="@/assets/images/home-icon-youtube.png" alt="">
          <h5>12000</h5>
        </div>
        </div>
      </div>
      <h1>How IdolEco works</h1>
      <div class="timeline-container">
        <div class="tag timeline-end text-center">
              <img src='@/assets/images/icon-start.png' width="50" style='margin-bottom: 26px;' />
              <br />
              Enter IdolEco and verify 
              <br />
              your social media account
        </div>
        <div class="box">
          <div class="line"></div>
        </div>
        <div class="timeline-continue">
          <div class="tag d-flex flex-row justify-content-center">
            <div style='width: 126px; text-align: right; font-weight: bold;'>
              <img src='@/assets/images/icon-1.png' height="88" />
              <br />
              Receive airdrops<br /> after verification
            </div>
            <div className="dot-container right left">
              <div className="tag dot"></div>
            </div>
            <div className="tag" style='width: 126px;'>
                  <img src='@/assets/images/icon-2.png' height="88" />
                  <br />
                  Gain rewards for the growing number of your social media followers
            </div>
          </div>
          <div class="btn">
            <div class="btnText">Claim rewards</div>
          </div>
          <div class="tag d-flex flex-row justify-content-center">
            <div style='width: 126px; text-align: right; font-weight: bold;'>
              <img src='@/assets/images/icon-4.png' height="88" />
              <br />
              Keep running your social media account to get more followers
            </div>
            <div className="dot-container left">
              <div className="tag dot"></div>
            </div>
            <div className="tag" style='width: 126px;'>  
            </div>
          </div>
          <div class="tag d-flex flex-row justify-content-center">
            <div className="tag" style='width: 126px;'>  
            </div>
            <div className="dot-container right">
              <div className="tag dot"></div>
            </div>
            <div style='width: 126px; text-align: left; font-weight: bold;'>
              <img src='@/assets/images/icon-5.png' height="88" />
              <br />
              Keep running your social media account to get more followers
            </div>
          </div>
          <div class="btn">
            <div class="btnText">Expand Influence</div>
          </div>
          <div class="tag d-flex flex-row justify-content-center">
            <div style='width: 126px; text-align: right; font-weight: bold;'>
              <img src='@/assets/images/icon-6.png' height="88" />
              <br />
              Finish commercial orders and get promotion commissions
            </div>
            <div className="dot-container left">
              <div className="tag dot"></div>
            </div>
            <div className="tag" style='width: 126px;'>  
            </div>
          </div>
          <div class="btn">
            <div class="btnText">Earn more cash</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  props: {},
  setup() {
  }
})
</script>
<style lang="scss" scoped>
.home-container {
  width: 375px;
  height: 2950px;
  box-sizing: border-box;
  background: #f0f2f5;
  .warpper {
    width: 375px;
    height: 1376px;
    background: #fff;
    background: linear-gradient(135deg, #040404 0%, rgba(10,10,10,0.34) 100%),url('../../assets/images/home-backgroun-img.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleContainer{
      width: 341px;
      height: 250px;
      font-size: 42px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 51px;
      letter-spacing: 1px;
      background: linear-gradient(132deg, #FF26D1 0%, #279DFF 61%, #AA00F1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 104px;
      text-align: center;
    }
    .desc{
      width: 352px;
      height: 60px;
      font-size: 16px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 19px;
      margin-top: 55px;
      text-align: center;
    }
    p{
      width: 352px;
      height: 19px;
      font-size: 16px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 19px;
      text-align: center;
      margin-top: 16px;
    }
    .influencerContainer{
      width: 346px;
      height: 136px;
      border: 1px solid #FFFFFF;
      margin: 65px auto 9px;
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 46px 32px 47px 40px;
      box-sizing: border-box;
      img{
        width: 48px;
        height: 48px;
      }
      .textContent{
        font-size: 16px;
        font-family: HelveticaNeue;
        color: #FFFFFF;
      }
      .numContent{
        font-size: 18px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #FFFFFF;
      }
    }
    .camAndFans{
      display: flex;
      .left{
        width: 167px;
        height: 188px;
        border: 1px solid #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 23px;
        box-sizing: border-box;
        img{
          width: 46px;
          height: 46px;
        }
      }
      .right{
        margin-left: 12px;
        width: 167px;
        height: 188px;
        border: 1px solid #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 23px;
        box-sizing: border-box;
        img{
          width: 46px;
          height: 46px;
        }
      }
    }
    .platforms{
      width: 375px;
      height: 373px;
      background: #000000;
      margin-top: 22px;
      .platItem{
        width: 167px;
        height: 186px;
        box-sizing: border-box;
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        img{
          width: 52px;
          height: 52px;
        }
        .youtubeIcon{
          width: 54px;
          height: 37px;
        }
      }
    }
    h1{
      font-size: 31px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #2A2A2A;
      line-height: 38px;
      margin-top: 77px;
      margin-bottom: 47px;
    }
  }
  .timeline-container{
    .timeline-continue{
      .tag{
        font-size: 13px;
        font-weight: bold;
      }
      .btn{
        display: block;
        width: 194px;
        height: 44px;
        background: linear-gradient(90deg, #D449C9 0%, #885AF9 100%);
        border-radius: 25px;
        font-size: 13px;
        font-weight: bold;
        color: #FFFFFF;
        letter-spacing: 1px;
        margin: 23px auto 103px;
        text-align: center;
        position: relative;
        font-size: 15px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        text-align: center;
        line-height: 44px;
      }
    }
    .dot-container {
      width: 40px;
      height: 40px;
      position: relative;
      opacity: 1;
      top: 24px;
      margin: 0 40px;

      &.left::before {
        content: "";
        width: 30px;
        height: 2px;
        position: absolute;
        background-color: #BC4ED8;
        left: -30px;
        top: 50%;
        // .transform(translateY(-50%));
        // filter: unset !important;
      }

      &.right::after {
        content: "";
        width: 30px;
        height: 2px;
        position: absolute;
        background-color: #BC4ED8;
        right: -30px;
        top: 50%;
      }
    }
    .box{
    width: 152px;
    height: 63px;
    background: linear-gradient(180deg,  #FFFFFF 0%, rgba(255,255,255,0) 100%);
    margin: 11px auto 0;
    .line{
      width: 2px;
      height: 1120px;
      // border: 1px solid #BC4ED8;
      background: #BC4ED8;
      margin: 0 auto;
    }
  }
  .tag {
      opacity: 1;
      z-index: 2;
      font-size: 16px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #2A2A2A;
      line-height: 19px;
    }
    .text-center {
      text-align: center !important;
    }
    .justify-content-center {
      justify-content: center !important;
    }
    .flex-row {
      flex-direction: row !important;
    }
    .d-flex {
      display: flex !important;
    }
    .timeline-end {
      position: relative;
      width: 100%;
      text-align: center;
      z-index: 1;
    }
    .dot {
      width: 38px;
      height: 38px;
      background-color: #D349CA;
      border-radius: 50%;
      z-index: 2;
      position: relative;
      background: #D349CA;
      border: 1px solid #8D59F6;
      filter: blur(4px);
    }
  }
  
}
.van-button--primary{
  width: 319px;
  height: 44px;
  background: #BD4BE7;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 65px;
}
.startBtn{
  width: 319px;
  height: 44px !important;
  background: #BD4BE7;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 65px;
  color: #fff;
}
h3{
  font-size: 16px;
  font-family: HelveticaNeue;
  color: #FFFFFF;
  line-height: 18px;
}
h4{
  font-size: 16px;
  font-family: HelveticaNeue;
  color: #FFFFFF;
  line-height: 18px;
  font-weight: bold;
  margin-top: 3px;
}
h5{
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
}
</style>
