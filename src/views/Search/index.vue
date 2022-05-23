<template>
  <div>
    <!-- 搜索页面头部 -->
    <div class="search-header">
      <!-- 后退按钮 -->
      <van-icon name="arrow-left" color="#000" size="0.48rem" class="goback" @click="$router.replace('/home')" />
      <!-- 搜索组件 -->
      <van-search placeholder="请输入搜索关键词" shape="round" autofocus v-model="kw" @input="inputFn" @search="enterFn" v-fofo />
    </div>
    <!-- 搜索历史 -->
    <div class="search-history">
      <!-- 标题 -->
      <van-cell title="搜索历史">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="clearFn" />
        </template>
      </van-cell>

      <!-- 历史列表 -->
      <div class="history-list">
        <span class="history-item" v-for="str, index in history" :key="index" @click="hisClickFn(str)">{{ str }} </span>
      </div>
    </div>
    <!-- 热搜书籍 -->
    <div>
      <div class="search-recommend">
        <div class="recommend-title">
          热搜书籍
        </div>
        <div class="recommend-content">
          <div class="recommend-item" v-for="(item,index) in hotBook" :key="index" @click="navToDetail(item)">
            <div class="recommend-icon">
              <img :src="require('./images/daochu1024-26.png')" alt="" v-if="index === 0">
              <img :src="require('./images/daochu1024-27.png')" alt="" v-if="index === 1">
              <img :src="require('./images/daochu1024-28.png')" alt="" v-if="index === 2">
              <span v-if="index>2">{{ index+1 }}</span>
            </div>
            <div class="recommend-detail">
              <div class="detail-cover">
                <img :src="item.cover" alt="">
              </div>
              <div class="detail-intro">
                <div class="detail-name">{{item.name}}</div>
                <div class="detail-status">{{item.category}}·{{item.state}}·{{item.words}}字</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getHotBookAPI} from "@/api/index.js"
export default {
  data () {
    return {
      kw: '',
      history: JSON.parse(localStorage.getItem('his')) || [] ,
      hotBook:[],
      top3:[
        {
          url:'./images/daochu1024-26.png'
        },
        {
          url:'./images/daochu1024-27.png'
        },
        {
          url:'./images/daochu1024-28.png'
        }
      ]
    }
  },
  methods:{
    inputFn () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.kw.length === 0) return 
                console.log(this.kw)
            }, 500)
        },
        enterFn () {
          this.history.push(this.kw)
          setTimeout(() => {
              this.$router.push({
                  path: `/search-result/${this.kw}`
              })
          })
          this.history = Array.from(new Set(this.history))
        },
        hisClickFn (str) {
          this.$router.push({
            path: `/search-result/${str}`
          })
        },
        clearFn () {
          this.history = [] 
        },
        navToDetail(obj){
          this.$router.push({
            name:'bookDetail',
            params:{
              obj
            }
          })
        }
  },
  async created() {
    const res = await getHotBookAPI()
    this.hotBook = res.data
    console.log(this.hotBook);
  },
  watch: {
    history () {
        localStorage.setItem('his', JSON.stringify(this.history))
    }
}
}
</script>

<style scoped lang="less">
.search-header {
  margin-top: 15px;
  height: 46px;
  display: flex;
  align-items: center;
  overflow: hidden;
  /*后退按钮*/
  .goback {
    padding-left: 14px;
  }
  /*搜索组件*/
  .van-search {
    flex: 1;
  }
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}

.history-list {
  padding: 0 10px;
  .history-item {
    display: inline-block;
    font-size: 12px;
    padding: 8px 14px;
    background-color: #efefef;
    margin: 10px 8px 0px 8px;
    border-radius: 10px;
  }
}
.search-recommend{
  margin-top: 30px;
  width: 100%;
  padding: 0 20px;
  .recommend-title{
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .recommend-content{
    display: flex;
    flex-direction: column;
    .recommend-item{
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      .recommend-icon{
        text-align: center;
        margin-right: 10px;
        width: 35px;
        height: 40px;
        span{
          font-size: 20px;
          font-weight: bold;
          color: rgb(164, 162, 162);
        }
        img{
          width: 100%;
        }
      }
      .recommend-detail{
        display: flex;
        align-items: center;
        .detail-cover{
          margin-right: 13px;
          width: 40px;
          height: 50px;
          img{
            width: 100%;
          }
        }
        .detail-intro{
          display: flex;
          flex-direction: column;
          .detail-name{
            margin-bottom: 8px;
            font-size: 14px;
            color: #000;
            font-weight: bold;
          }
          .detail-status{
            font-size: 13px;
            color: #b2b2b2;
          }
        }
      }
    }
  }
}
</style>
