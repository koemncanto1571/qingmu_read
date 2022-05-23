<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @cancel="onCancel" @search="enterFn" />
    <div class="search-text">
      有关 "<span>{{$route.params.keywords}}</span>" 的搜索结果
    </div>
    <div class="search-content">
      <div class="search-item" v-for="(item,index) in searchResult" :key="index">
        <div class="search-cover">
          <img :src="item.cover" alt="">
        </div>
        <div class="search-detail">
          <div class="search-name">{{item.name}}</div>
          <div class="search-author">{{item.author}}</div>
          <div class="search-intro">{{item.intro}}</div>
          <div class="search-status">{{item.category}}·{{item.type}}·{{item.state}}·{{item.words}}字</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SearchAPI} from "@/api/index.js"
export default {
  data() {
    return {
      value:'',
      searchResult:[]
    }
  },
  methods:{
    onCancel(){
      this.$router.replace('/search')
    },
    enterFn(){
      this.$router.push({
        path:`/search-result/${this.value}`
      })
    }
  },
 async created() {
    this.value = this.$route.params.keywords
    const res = await SearchAPI(this.value)
    this.searchResult = res.data
    console.log(this.searchResult);
  },
}
</script>

<style lang="less" scoped>
.search-text{
  padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 7px solid #eee;
    margin-bottom: 20px;
    span{
      color: red;
    }
}
.search-content{
  width: 100%;
  padding: 0 20px;
  .search-item{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .search-cover{
      margin-right: 13px;
      width: 67px;
      height: 88px;
      img{
        width: 100%;
        height: 100%;
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
</style>