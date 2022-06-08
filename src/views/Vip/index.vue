<template>
  <div>
    <div class="vip-head">
      <van-nav-bar title="开通会员" left-arrow :border="false" @click-left="onClickLeft" />
    </div>
    <div class="user-card">
      <div class="user-info">
        <div class="user-photo">
          <img :src="userInfo.head" alt="">
        </div>
        <div class="user-name">
          <span>{{userInfo.nickname}}</span>
          <div>{{vipText}}</div>
        </div>
      </div>
      <div class="card-text">
        <span>开通会员，每月可省50元</span>
        <div>{{isVip}}</div>
      </div>
    </div>
    <div class="vip-rights">
      <div class="rights-title">
        会员权益
      </div>
      <div class="rights-list">
        <div class="list-item" v-for="(item,index) in rightsList" :key="index">
          <div class="item-img">
            <img :src="item.src" alt="">
          </div>
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="vip-choice">
      <div class="choice-title">
        套餐选择
      </div>
      <div class="choice-list">
        <div class="choice-item" v-for="(item,index) in choiceList" :key="index" :class="[index===choiceActive?'choice-active':'']" @click="choiceFn(item,index)">
          <div class="choice-type">
            {{item.timetype}}
          </div>
          <span><span>￥</span>{{item.price}}</span>
          <div class="o-price" v-if="item.originalprice">
            {{item.originalprice}}
          </div>
        </div>
      </div>
    </div>
    <div class="vip-pay">
      <div class="pay-title">
        支付方式
      </div>
      <div class="pay-list">
        <div class="pay-item" v-for="(item,index) in payList" :key="index">
          <div class="pay-type">
            <div class="pay-img">
              <img :src="item.payImg" alt="">
            </div>
            <span>{{ item.payText }}</span>
          </div>
          <van-radio-group v-model="radio" icon-size="0.346rem">
            <van-radio :name="item.payType" checked-color="#F2DAAA"></van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="pay-renew">
        <div class="renew-title">
          自动续费说明
        </div>
        <div class="renew-content">
          <span>·订购周期：一月、4个月、12个月</span>
          <span>·订购价格：连续包月10/月，连续包季24/季，连续包年95/年</span>
          <span>·续订说明：开通连续包月后会在到期24小时内扣款，扣费成功后自动续
            费1个月会员有效期 </span>
          <span>·如何取消自动续费:安卓开通VIP自动续费服务的用户如需取消自动续费，
            请在到期前48小时在微信我的支付-自动扣费中或支付宝我的-设置支付
            设置免密支付/自动扣款中,找到相关服务,关闭即可; i0S手机支持开通VIP
            自动续费服务的用户，请打开苹果手机”设置”进入"appstore"点击"App
            le ID”，进入“账户设置"页面，点击“订阅”，选择取消自动订阅即可。 </span>
          <span>·VIP会员服务一 经开通，鉴于该网络服务性质特殊不属于退货的商品,不
            适用无理由退换规定。 </span>
        </div>
      </div>
      <div class="pay-btn" @click="payFn(choiceList[choiceActive])">
        立即支付{{choicePay}}订购
      </div>
    </div>
  </div>

</template>

<script>
import { Dialog } from 'vant';
import {findUserAPI,getVipType,addVip} from "@/api/index.js"
export default {
  data() {
    return {
      vipText:'',
      isVip:'',
      userInfo:[],
      choiceActive:0,
       radio: '1',
       choiceList:[],
       choicePay:'',
      rightsList:[
          {
            src:require("./images/AD.png"),
            text:'无广告'
          },
          {
            src:require("./images/read.png"),
            text:'离线阅读'
          },
          {
            src:require("./images/icon.png"),
            text:'尊贵标识'
          },
          {
            src:require("./images/book.png"),
            text:'会员书籍'
          }
        ],
      payList:[
        {
          payImg:require("./images/支付宝.png"),
          payText:'支付宝',
          payType:"1"
        },
        {
          payImg:require("./images/微信.png"),
          payText:'微信',
          payType:"2"
        },
        {
          payImg:require("./images/银行卡.png"),
          payText:'银行卡',
          payType:"3"
        }
      ]
      }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    choiceFn(item,index){
      this.choiceActive = index
      this.choicePay = item.price
    },
    payFn(item){
      Dialog.confirm({
        title: '开通会员',
        message: '确定支付并开通会员吗？',
    }).then(async(item) => {
      this.isVip = '续费会员'
      this.vipText = '尊敬的VIP会员'
      const res = await addVip({
        type:item.timetype,
        typeid:item.typeid,
        userid:this.$store.state.userId
      })
      console.log(res);
      })
      .catch(() => {
        // on cancel
      });
        }
      },
  async created() {
    const res = await findUserAPI({
      id:this.$store.state.userId
    })
    this.userInfo = res.data
    if(res.data.vip !== null){
      this.isVip = '续费会员',
      this.vipText = '尊敬的VIP会员'
    }
    // console.log(this.userInfo);

    const res2 = await getVipType()
    this.choiceList = res2.data
    this.choicePay = this.choiceList[0].price
    console.log(this.choiceList);
  },
}
</script>

<style lang="less" scoped>
.vip-head{
  height: 147px;
  background: #323232;
  padding-top: 15px;
}
.user-card{
  padding: 16px;
  position: absolute;
  top: 79px;
  left: 15px;
  width: 345px;
  height: 124px;
  background: #F2DAAA;
  border-radius: 5px;
  overflow: hidden;
  .user-info{
    display: flex;
    align-items: center;
    .user-photo{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .user-name{
      margin-left: 6px;
      display: flex;
      flex-direction: column;
      span{
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: bold;
        color: #FFFFFF;
      }
      div{
        font-size: 10px;
        font-family: "PingFangSC";
        font-weight: bold;
        color: #FFFFFF;
      }
    }
  }
  .card-text{
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    span{
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #E5B970;
    }
    div{
      width: 79px;
      height: 21px;
      background: #FFFFFF;
      border-radius: 11px;
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #E5B970;
      text-align: center;
      line-height: 21px;
    }
  }
}
.vip-rights{
  margin-top: 72px;
  width: 100%;
  border-bottom: 5px solid #f8f8f8;
  display: flex;
  flex-direction: column;
  .rights-title{
    margin-left: 14px;
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: bold;
    color: #000000;
  }
  .rights-list{
    margin: 17px 30px 14px 30px;
    display: flex;
    justify-content: space-between;
    .list-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      .item-img{
        width: 45px;
        height: 45px;
        margin-bottom: 2px;
        img{
          width: 100%;
        }
      }
      span{
        font-size: 12px;
        font-family: "PingFangSC";
        font-weight: bold;
        color: #000000;
      }
    }
  }
}
.vip-choice{
  width: 100%;
  border-bottom: 5px solid #f8f8f8;
  .choice-title{
    margin-top: 12px;
    margin-left: 14px;
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: bold;
    color: #111111;
  }
  .choice-list{
    margin-top: 16px;
    margin-bottom: 15px;
    margin-left: 15px;
    display: flex;
    .choice-item{
      padding-top: 12px;
      margin-right: 9px;
      width: 72px;
      height: 88px;
      border: 1px solid #B7B7B7;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .choice-type{
        font-size: 13px;
        font-family: "PingFangSC";
        font-weight: bold;
        color: #111111;
        margin-bottom: 6px;
      }
      span{
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: bold;
        color: #E5B970;
        margin-bottom: 5px;
        span{
          font-size: 11px;
          font-family: "PingFangSC";
          font-weight: bold;
          color: #E5B970;
        }
      }
      .o-price{
        font-size: 10px;
        font-family: "PingFangSC";
        font-weight: bold;
        text-decoration: line-through;
        color: #8A8A8A;
      }
    }
  }
}
.vip-pay{
  width: 100%;
  border-bottom: 5px solid #f8f8f8;
  .pay-title{
    margin-top: 12px;
    margin-left: 14px;
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: bold;
    color: #111111;
  }
  .pay-list{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 16px;
    margin-top: 16px;
    .pay-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      .pay-type{
        display: flex;
        align-items: center;
        .pay-img{
          width: 32px;
          height: 32px;
          img{
            width: 100%;
          }
        }
        span{
          margin-left: 3px;
          font-size: 12px;
          font-family: "PingFangSC";
          font-weight: bold;
          color: #2F2F2F;
        }
      }
    }
  }
}
.pay-renew{
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
  .renew-title{
    margin-top: 12px;
    margin-left: 14px;
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: bold;
    color: #111111;
  }
  .renew-content{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-family: "PingFangSC";
    font-weight: 500;
    color: #000000;
    margin: 0 16px;
    span{
      margin-top: 8px;
    }
  }
}
.pay-btn{
  position: fixed;
  bottom: 12px;
  left: 15px;
  width: 345px;
  height: 40px;
  background: #F3CE84;
  border-radius: 5px;
  font-size: 15px;
  font-family: "PingFangSC";
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
  line-height: 40px;
}
.choice-active{
  background: #FBF6EC;
}
</style>