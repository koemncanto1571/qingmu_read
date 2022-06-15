<template>
  <div>
    <van-nav-bar title="基本信息" left-arrow @click-left="onClickLeft" right-text="管理" fixed>
      <template slot="title">
        <van-tabs v-model="active" line-height="0" title-active-color="#000" title-inactive-color="rgb(160, 155, 155)">
          <van-tab title="阅读记录"></van-tab>
          <van-tab title="订阅"></van-tab>
        </van-tabs>
      </template>
    </van-nav-bar>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" class="search" ref="content" />
    <div>
      <van-tabs v-model="active2">
        <van-tab title="浏览历史">
          <div class="his-item" v-for="(item,index) in readHis" :key="index" ref="cell">
            <van-swipe-cell>
              <van-card :title="item.bookname" :desc="item.introduction" class="goods-card" :thumb="item.cover" @click="navToDetail(item.bookid)" />
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="delHis(item,index)" />
              </template>
            </van-swipe-cell>
          </div>
        </van-tab>
        <van-tab :title="`赞过(${likeBook.length})`">
          <div class="search-content">
            <div class="search-item" v-for="(item,index) in likeBook" :key="index">
              <div class="search-cover">
                <img :src="item.cover" alt="">
              </div>
              <div class="search-detail">
                <div class="search-name">{{item.bookname}}</div>
                <div class="search-author">{{item.author}}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab :title="`在读(${readingBook.length})`">
          <div class="search-content">
            <div class="search-item" v-for="(item,index) in readingBook" :key="index">
              <div class="search-cover">
                <img :src="item.cover" alt="">
              </div>
              <div class="search-detail">
                <div class="search-name">{{item.bookname}}</div>
                <div class="search-author">{{item.author}}</div>
                <div class="search-intro">{{item.chapter}}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="读完">
          <div class="search-content">
            <div class="search-item" v-for="(item,index) in readDone" :key="index">
              <div class="search-cover">
                <img :src="item.cover" alt="">
              </div>
              <div class="search-detail">
                <div class="search-name">{{item.bookname}}</div>
                <div class="search-author">{{item.author}}</div>
                <div class="search-intro">{{item.chapter}}</div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {getReadHistory,getLikeBook,getReadingBook,getReadDoneBook,deleteHistory,getBookInfoAPI} from "@/api/index.js"
import { Dialog } from "vant"
export default {
  data() {
    return {
      allBook:[],
      value:'',
      active:0,
      active2:0,
      readHis:[],
      likeBook:[],
      readingBook:[],
      readDone:[],
      isDel:false
    }
  },
  methods:{
    onClickLeft(){
      this.$router.replace('/user')
    },
    async delHis(item,index){
        this.$refs.cell[index].style.display = 'none'
        const res = await deleteHistory({
          bookid:item.bookid
        })
        console.log(res);
    },
    navToDetail(id){
      const obj = this.allBook.filter(item=>item.id === id)
      this.$router.push({
        name:"bookDetail",
        params:{
          obj:obj[0]
        }
      })
    },
    //   beforeClose({position, instance }) {
    //   switch (position) {
    //     case 'left':
    //     case 'cell':
    //     case 'outside':
    //     instance.close();
    //     break;
    //     case 'right':
    //       Dialog.confirm({
    //         message: '确定删除吗？',
    //       }).then(() => {
    //         instance.close();
    //         // console.log(name);
    //       });
    //       break;
    //   }
    //   // const res = await deleteHistory({
    //   //   bookid:item.bookid
    //   // })
    //   // console.log(res);
    //   // this.readHis = this.readHis.filter(obj=>obj.bookid !== item.bookid)
    // }
  },
  async created() {
    const res = await getReadHistory()
    console.log(res);
    this.readHis = res.data

    const res2 = await getLikeBook()
    this.likeBook = res2.data
    // console.log(this.likeBook);

    const res3 = await getReadingBook()
    this.readingBook = res3.data
    // console.log(this.readingBook);

    const res4 = await getReadDoneBook()
    this.readDone = res4.data
    console.log(this.readDone);

    const res5 = await getBookInfoAPI()
    this.allBook = res5.data
  },
}
</script>

<style lang="less" scoped>
.search{
  margin-top: 45px;
}
/deep/.van-card__thumb{
  width: 90px;
  height: 120px;
}
/deep/.van-card__thumb img{
  width: 90px;
  height: 120px;
}
/deep/.van-swipe-cell{
  transition: .5s;
}
/deep/.cell{
  display: none;
  // transition: .2s;
}
/deep/.van-card__title{
  font-size: 17px;
  padding-bottom: 10px;
  font-weight: bold;
  margin-bottom: 20px;
}
/deep/.van-tab__text--ellipsis{
  font-weight: bold;
  font-size: 16px;
}
/deep/.van-nav-bar__text{
  color: #000;
  font-weight: bold;
  font-size: 14px;
}
/deep/ .van-nav-bar{
  padding-top: 10px;
  background-color: #fff;
}
/deep/ .van-hairline--bottom::after{
    border-bottom-width: 0;
  }
/deep/ .van-nav-bar__content{
  background-color: #fff;
  border: none;
  .van-nav-bar__title{
    color: #000;
    font-weight: bold;
  }
  .van-nav-bar__left{
    .van-icon{
      color: #000;
      font-weight: bold;
    }
  }
}
.search-content{
  width: 100%;
  padding: 10px 20px;
  .search-item{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .search-cover{
      margin-right: 13px;
      width: 67px;
      height: 88px;
      img {
        width: 67px;
        height: 88px;
      }
    }
    .search-detail{
      display: flex;
      flex-direction: column;
      .search-name{
        font-size: 17px;
        color: #000;
        font-weight: bold;
      }
      .search-author,.search-intro,.search-status{
        margin-top: 7px;
        font-size: 14px;
        color: #9c9c9c;
      }
    }
  }
}
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>