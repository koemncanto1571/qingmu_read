<template>
  <div>
    <div class="index">
      <NavList></NavList>
      <div class="search">
        <div class="search-input" @click="navToSearch">
          <img src="./images/放大镜.png" alt="">
          <input type="text" placeholder="雪中悍刀行——热血江湖情......">
        </div>
        <div class="search-btn"></div>
      </div>
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in banner" :key="index"><img :src="item.print" alt=""></van-swipe-item>
          <!-- <van-swipe-item><img src="https://s2.loli.net/2022/05/14/MHSvUfNpmeRiTGD.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://s2.loli.net/2022/05/14/lg8H6xoEQXIGSnf.png" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://s2.loli.net/2022/05/14/QsIAVfUkd6mtbBu.png" alt=""></van-swipe-item> -->
        </van-swipe>
      </div>
      <div class="list">
        <div class="list-item" v-for="(item,index) in rankImg" :key="index">
          <img :src="item.print" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="recommend">
        <div class="recommend-item">
          <div class="item-title">
            <span>推荐书籍</span>
            <div class="more">
              更多>
            </div>
          </div>
          <div class="item-content">
            <div class="content-item" v-for="(item,index) in recommendList" :key="index" @click="navToDetail(item.id)">
              <div>
                <img :src="item.cover" alt="">
              </div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="recommend-item">
          <div class="item-title">
            <span>热门书籍</span>
            <div class="more">
              更多>
            </div>
          </div>
          <div class="item-content">
            <div class="content-item" v-for="(item,index) in hotBookList" :key="index" @click="navToDetail(item.id)">
              <div>
                <img :src="item.cover" alt="">
              </div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TabList></TabList>
  </div>
</template>

<script>
import {getRecommendAPI,getHotBookAPI,getRankImgAPI,getBookInfoAPI,getHomeBanner} from "@/api/index.js"
import NavList from "@/components/NavList"
import TabList from "@/components/TabList"
export default {
  name:'index',
  components:{
    NavList,TabList
  },
  data() {
    return {
      banner:[],
      active: 0,
      allBook:[],
      recommendList:[
        {
          cover:''
        }
      ],
      hotBookList:[
        {
          cover:''
        }
      ],
      rankImg:[],
    };
  },
  async created() {
    const {data} = await getRecommendAPI()
    this.recommendList = data
    console.log(this.recommendList);

    const res = await getHotBookAPI()
    // this.hotBookList = res.data
    for(let i =0;i<6;i++){
      this.hotBookList[i] = res.data[Math.round(Math.random()*res.data.length)]
    }
    console.log(this.hotBookList);

    const res2 = await getRankImgAPI()
    this.rankImg = res2.data
    // console.log(this.rankImg);
    const res3 = await getBookInfoAPI()
    this.allBook = res3.data
    // console.log(this.allBook);

    const res4 = await getHomeBanner()
    this.banner = res4.data
  },
  async updated() {
    const res = await getHotBookAPI()
    // this.hotBookList = res.data
    for(let i =0;i<6;i++){
      this.hotBookList[i] = res.data[Math.round(Math.random()*res.data.length)]
    }
  },
  methods:{
    navToDetail(id){
      const obj = this.allBook.filter(item=>item.id === id)
      this.$router.push({
        name:"bookDetail",
        params:{
          obj:obj[0]
        }
      })
    },
    navToSearch(){
      this.$router.push({
        path:'/search'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.index {
      margin-top: 35px;
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin-bottom: 45px;
    }
    .search {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .search-input {
      padding-right: 15px;
      width: 304px;
      height: 34px;
      border: 1px solid #ACA8A9;
      border-radius: 16px;
      display: flex;
      align-items: center;
    }

    .search-input img {
      margin-left: 17px;
      margin-right: 27px;
      width: 17px;
      height: 17px;
    }

    .search-input input {
      flex: 1;
      border: 0;
      outline: 0;
      font-size: 11px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000000;
    }

    .banner {
      margin-top: 10px;
      width: 344px;
      height: 105px;
      border-radius: 10px;
      overflow: hidden;
      z-index: -99;
      .my-swipe{
        height: 100%;
      }
    }

    .banner img {
      width: 100%;
      // height: 100%;
    }

    .list {
      margin-top: 18px;
      width: 375px;
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
    }

    .list-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    .list-item img {
      width: 42px;
      height: 42px;
      margin-bottom: 8px;
    }

    .list-item span {
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000000;
    }

    .recommend {
      width: 100%;
      margin-bottom: 20px;
    }

    .recommend-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item-title {
      margin-bottom: 16px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .item-title span {
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 600;
      color: #000000;
    }

    .item-title .more {
      font-size: 11px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000000;
    }

    .item-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      width: 345px;
      height: 314px;
      background-color: rgba(200, 208, 200, 0.5);
      border-radius: 10px;
    }

    .content-item {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    }

    .content-item div {
      width: 74px;
      height: 110px;
      border-radius: 5px;
      overflow: hidden;
    }

    .content-item div img {
      width: 100%;
    }

    .content-item span {
      margin-top: 10px;
      width: 74px;
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: 500;
      color: #000000;
    }

    
</style>