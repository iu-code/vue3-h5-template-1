<!-- Header -->
<template>
    <div class="footer-container">
        <img class="logoImg" src="@/assets/images/logo.png" alt="" />
        <div class="descContainer">
            IdolEco is on the mission to build an ecosystem of influence economy. We procide Decentralized Global Marketing services for all walks of life.
        </div>
        <van-button class="followBtn">Follow us</van-button>
        <div class="link-content">
            <div class="link-details">
                <div class="link-item">
                    <h3>About</h3>
                    <ul>
                        <li className="item">
                        <a href="https://idoleco-1.gitbook.io/documentation/" target="_blank">Docs</a>
                        </li>
                        <li className="item">
                        <a href="https://idoleco.gitbook.io/idoleco-whitepaper/" target="_blank">Whitepaper</a>
                        </li>
                    </ul>
                </div>
                <div className="link-item" style="margin-left: -10px;">
                    <h3>Community</h3>
                    <ul>
                        <li className="item" >
                        <a href="https://blog.idoleco.com/" target="_blank">Blog</a>
                        </li>
                        <li className="item">
                        <a href="https://twitter.com/IdolEco" target="_blank">Twitter</a>
                        </li>
                        <li className="item">
                        <a href="https://discord.gg/mAkAECN9gq" target="_blank">Discord</a>
                        </li>
                        <li className="item">
                        <a href="https://www.tiktok.com/@idolecosys" target="_blank">TikTok</a>
                        </li>
                        <li className="item">
                        <a href="https://www.facebook.com/IdolEcoIO" target="_blank">Facebook</a>
                        </li>
                    </ul>
            </div>
            <div className="link-item paddingLeft">
              <h3>Support</h3>
              <ul>
                <li className="item">
                  <a href="https://www.facebook.com/groups/539512844902102" target="_blank">Help center</a>
                </li>
                <li className="item">
                  <a href="https://www.facebook.com/groups/539512844902102" target="_blank">Influencer support</a>
                </li>
                <li className="item">
                  <a href="https://www.facebook.com/groups/539512844902102" target="_blank">Business support</a>
                </li>
              </ul>
            </div>
            </div>
        </div>
    </div>
  </template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.footer-container{
    width: 375px;
    height: 630px;
    background: #FF2658;
    .logoImg{
        width: 153px;
        height: 44px;
        margin-top: 65px;
        margin-left: 39px;
    }
    .descContainer{
        width: 310px;
        height: 69px;
        font-size: 14px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 17px;
        margin-left: 38px;
        margin-top: 38px;
    }
    .followBtn{
        margin-top: 32px;
        margin-left: 33px;
        width: 155px;
        height: 44px;
        background: #07C8CF;
        border-radius: 6px;
        font-size: 15px;
        font-family: HelveticaNeue-Bold, HelveticaNeue;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 18px;
        letter-spacing: 1px;
        border: none;
    }
    .link-content {
      margin-left: 25px;
      margin-top: 89px;

      .link-details {
        display: flex;
        justify-content: flex-end;

        .link-item {
          text-align: left;
          flex: 1;
        //   justify-content: space-between;

          &.paddingLeft {
            // padding-left: 20px;
          }

          h3 {
            font-size: 14px;
            font-family: HelveticaNeue-Bold, HelveticaNeue;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 23px;
            margin-bottom: 14px;
          }

          .item {
            // height: 14px;
            font-size: 14px;
            font-family: HelveticaNeue;
            color: #FFFFFF;
            line-height: 14px;
            margin-bottom: 16px;

            a {
              font-size: 13px;
              font-family: HelveticaNeue;
              color: #FFFFFF;
              line-height: 16px;
            }
          }
        }
      }
    }
}
</style>
  