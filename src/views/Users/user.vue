<template>
  <div>
    <div class="user">
      <div class="top">
      </div>
      <div class="user-card">
        <div class="user-title">
          <div class="user-info" v-if="isLogin">
            <div class="user-img">
              <img :src="user.head" alt="">
            </div>
            <span>{{user.nickname}}</span>
          </div>
          <div class="unload-title" v-else>
            <span>欢迎来到倾慕阅读</span>
            <div class="login-btn" @click="$router.push('/login')">
              立即登录
            </div>
          </div>
          <div class="user-edit" @click="navToEdit">
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="card-detail">
          <div class="detail-item">
            <span>0.00</span>
            <div>书币</div>
          </div>
          <div class="detail-item">
            <span>0.00</span>
            <div>订单</div>
          </div>
          <div class="detail-item">
            <span>0.00</span>
            <div>账户</div>
          </div>
        </div>
        <div class="user-function">
          <router-link class="function-item user-choose" to="/vip">
            阅读VIP
          </router-link>
          <router-link class="function-item" to="/voucher-center">
            充值中心
          </router-link>
        </div>
      </div>
      <div class="info-card">
        <div class="card-item">
          <div class="item-img">
            <img src="./images/成就.png" alt="">
          </div>
          <div class="item-text">成长成就</div>
          <div class="text"><span>1</span>/12</div>
        </div>
        <div class="card-item">
          <div class="item-img">
            <img src="./images/红包.png" alt="">
          </div>
          <div class="item-text">成长成就</div>
          <div class="text"><span>2</span>个</div>
        </div>
        <div class="card-item">
          <div class="item-img">
            <img src="./images/加息券.png" alt="">
          </div>
          <div class="item-text">成长成就</div>
          <div class="text"><span>3</span>张</div>
        </div>
      </div>
      <div class="ad">
        <div class="ad-text">邀您反馈产品体验</div>
        <div class="ad-btn">立即参与</div>
      </div>
      <div class="list">
        <div class="list-item">
          <span>勋章</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="list-item">
          <span>笔记</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="list-item" @click="$router.push('/read-history')">
          <span>阅读记录和订阅</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list-item">
          <span>我的账户</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="list-item">
          <span>我的书籍</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="list-item">
          <span>我的下载</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
        <div class="list-item">
          <span>关于我们</span>
          <div>
            <img src="./images/右箭头.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {findUserAPI} from "@/api/index.js"
import TabList from "@/components/TabList"
export default {
name:'Users',
data() {
  return {
    isLogin:false,
    user:[]
  }
},
components:{
  TabList,
},
methods:{
  navToEdit(){
    this.$router.push({
      name:'userEdit',
      params:{
        user:this.user
      }
    })
  }
},
async created() {
  // if(JSON.parse(localStorage.getItem('user')) !== null){
  //   this.user = JSON.parse(localStorage.getItem('user'))
  //   this.isLogin = true
  //   console.log(this.user);
  //   // console.log(222);
  // }else{
  //   console.log(333);
  // }
  // console.log(this.$route.params);
  console.log(this.$store.state.userId);
  if(this.$store.state.userId !== ''){
    const res = await findUserAPI({
    id:this.$store.state.userId
  })
    this.user = res.data
    this.isLogin = true
    console.log(this.user);
  }else{
    console.log(222);
  }
},
}
</script>

<style  lang='less' scoped>
    .user {
      background-color: rgb(242, 243, 247);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 45px;
    }

    .top {
      width: 100%;
      height: 158px;
      background: linear-gradient(90deg, #263576, #3291D7);
      margin-bottom: 59px;
    }

    .user-card {
      padding-top: 9px;
      top: 30px;
      position: absolute;
      width: 345px;
      height: 180px;
      background: #FFFFFF;
      border-radius: 10px;

    }

    .user-title {
      margin-top: 6px;
      margin-left: 17px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .user-info{
      display: flex;
      align-items: center;
    }
    .user-edit{
      margin-right: 10px;
      img{
        width: 13px;
      }
    }
    .user-img {
      width: 63px;
      height: 63px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 22px;
    }

    .user-img img {
      width: 100%;
    }

    .user-title span {
      font-size: 20px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000000;
    }

    .card-detail {
      margin-top: 18px;
      padding: 0 26px;
      display: flex;
      justify-content: space-between;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .detail-item span {
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000000;
    }

    .detail-item div {
      font-size: 12px;
      color: rgb(161, 152, 152);
    }

    .user-function {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
    }

    .function-item {
      margin-top: 11px;
      text-align: center;
      line-height: 36px;
      width: 144px;
      height: 36px;
      border: 1px solid #1AB5FF;
      border-radius: 5px;
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #1AB5FF;
    }
    .user-choose{
      background: #1AB5FF;
      color: #fff;
    }

    .info-card {
      width: 345px;
      height: 70px;
      background: #FFFFFF;
      border-radius: 10px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      padding: 0 23px;
      align-items: center;
    }

    .card-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-item .item-img {
      width: 20px;
      height: 20px;
    }

    .card-item .item-img img {
      width: 100%;
    }

    .item-text {
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #757B87;
    }

    .card-item .text {
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #757B87;
    }

    .card-item:nth-of-type(1) span {
      color: #CFB283;
    }

    .card-item:nth-of-type(2) span {
      color: #E93802;
    }

    .card-item:nth-of-type(3) span {
      color: #FFD022;
    }

    .ad {
      width: 345px;
      height: 113px;
      border-radius: 30px;
      background: url(./images/图层49.png);
      background-size: cover;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
    }

    .ad-text {
      margin-top: 17px;
      font-size: 24px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #263677;
    }

    .ad-btn {
      margin-top: 14px;
      width: 128px;
      height: 36px;
      border: 1px solid #DD0000;
      border-radius: 17px;
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #DD0000;
      text-align: center;
      line-height: 33px;
      margin-left: 44px;
    }

    .list {
      margin-bottom: 12px;
      width: 345px;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px 20px 0 20px;
    }

    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
    }

    .list-item span {
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #757B87;
    }

    .list-item div {
      width: 13px;
      height: 13px;
    }

    .list-item div img {
      width: 100%;
      height: 100%;
    }
    .unload-title{
      display: flex;
      align-items: center;
      span{
        margin-right: 15px;
        font-weight: bold;
        color: #2d2e2f;
      }
    }
    .login-btn{
      width: 80px;
      height: 25px;
      background-color: #e7792b;
      font-size: 15px;
      text-align: center;
      line-height: 25px;
      color: #fff;
      border-radius: 10px;
    }
  </style>