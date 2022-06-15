<template>
  <div class="flipbook">
    <div class="book-detail">
      <div class="detail-nav">
        <van-icon name="arrow-left" size="0.6rem" @click="$router.back()" />
        <div class="nav-fn">
          <div class="nav-add" @click="addBookshelf">{{isAdd?'已添加':'加入书架'}}</div>
          <div class="nav-install">下载<div class="icon">免费</div>
          </div>
          <span class="nav-recommend">评</span>
          <van-icon name="weapp-nav" size="0.4rem" />
        </div>
      </div>
      <div class="book-info">
        <div class="info-cover">
          <img :src="book.cover" alt="">
        </div>
        <span>{{book.name}}</span>
        <div class="info-author">
          <span>{{book.author}}</span>
          |
          <span class="info-status">{{book.state}}·{{book.words}}万字</span>
        </div>
      </div>
      <div class="book-content">
        <div class="content-title">
          <div class="title-score">
            <span>8.1<span>分</span></span>
            <div class="score-person">
              4003人点评>
            </div>
          </div>
          <div class="title-read">
            <span>4.4<span>万人</span></span>
            <div class="read-person">正在阅读</div>
          </div>
        </div>
        <div class="content-intro">
          <span>简介</span>
          <div class="intro-icon">
            <div class="intro-icon-item">
              番茄原创
            </div>
            <div class="intro-icon-item">
              {{book.category}}
            </div>
            <div class="intro-icon-item">
              {{book.type}}
            </div>
            <div class="intro-icon-item">
              {{book.state}}
            </div>
          </div>
        </div>
        <div class="content-words">
          {{book.intro}}
        </div>
      </div>
      <div class="book-control">
        <div class="control-btn">
          <span class="pre">上一章</span>
          <div class="slider">
            <van-slider v-model="value" bar-height="20px" inactive-color="#d5d0be" active-color="#a89f89" />
          </div>
          <span class="next">下一章</span>
        </div>
        <div class="control-tab">
          <div class="tab-item">
            <img src="./images/目录.png" alt="">
            <span>目录</span>
          </div>
          <div class="tab-item">
            <img src="./images/月亮.png" alt="">
            <span>夜间</span>
          </div>
          <div class="tab-item">
            <img src="./images/设置.png" alt="">
            <span>设置</span>
          </div>
        </div>
      </div>
      <div class="listen">
        听
      </div>
    </div>
    <div class="book-detail">
      <div class="detail-nav" v-show="isReading">
        <van-icon name="arrow-left" size="0.6rem" @click="back" />
        <div class="nav-fn">
          <div class="nav-add" @click="addBookshelf">{{isAdd?'已添加':'加入书架'}}</div>
          <div class="nav-install">下载<div class="icon">免费</div>
          </div>
          <span class="nav-recommend">评</span>
          <van-icon name="weapp-nav" size="0.4rem" />
        </div>
      </div>
      <div class="content" @click.prevent="showCtr">
        <span>第一章 敲门声</span>
        <div class="text">
          <p>“各部门就位！”</p>
          <p>“主持人，嘉宾准备，检查麦连接正常！”</p>
          <p>“直播连接，倒计时三，二，一！”</p>
          <p>“开始！”</p>
          <p>一扇巨大的玻璃之外，年过四十岁的节目总导演见到直播间开启，各部门都调度的不错之后，他松了口气，将耳机拿下。</p>
          <p>回头看向了苏晨说道：“好点了没有，你年纪轻轻，身体可要保护好啊！”</p>
          <p>苏晨是整个央视频道最有前途的年轻主持人。</p>
        </div>
      </div>
      <div class="book-control" v-show="isReading">
        <div class="control-btn">
          <span class="pre">上一章</span>
          <div class="slider">
            <van-slider v-model="value" bar-height="20px" inactive-color="#d5d0be" active-color="#a89f89" />
          </div>
          <span class="next">下一章</span>
        </div>
        <div class="control-tab">
          <div class="tab-item">
            <img src="./images/目录.png" alt="">
            <span>目录</span>
          </div>
          <div class="tab-item">
            <img src="./images/月亮.png" alt="">
            <span>夜间</span>
          </div>
          <div class="tab-item">
            <img src="./images/设置.png" alt="">
            <span>设置</span>
          </div>
        </div>
      </div>
    </div>
    <div class="book-detail">
      <div class="detail-nav" v-show="isReading" @click="back">
        <van-icon name="arrow-left" size="0.6rem" />
        <div class="nav-fn">
          <div class="nav-add" @click="addBookshelf">{{isAdd?'已添加':'加入书架'}}</div>
          <div class="nav-install">下载<div class="icon">免费</div>
          </div>
          <span class="nav-recommend">评</span>
          <van-icon name="weapp-nav" size="0.4rem" />
        </div>
      </div>
      <div class="content" @click="isReading = !isReading">
        <!-- <span>第一章 敲门声</span> -->
        <div class="text">
          <p>苏晨是整个央视频道最有前途的年轻主持人。</p>
          <p>“各部门就位！”</p>
          <p>回头看向了苏晨说道：“好点了没有，你年纪轻轻，身体可要保护好啊！”</p>
          <p>“主持人，嘉宾准备，检查麦连接正常！”</p>
          <p>“直播连接，倒计时三，二，一！”</p>
          <p>“开始！”</p>
          <p>一扇巨大的玻璃之外，年过四十岁的节目总导演见到直播间开启，各部门都调度的不错之后，他松了口气，将耳机拿下。</p>
        </div>
      </div>
      <div class="book-control" v-show="isReading">
        <div class="control-btn">
          <span class="pre">上一章</span>
          <div class="slider">
            <van-slider v-model="value" bar-height="20px" inactive-color="#d5d0be" active-color="#a89f89" />
          </div>
          <span class="next">下一章</span>
        </div>
        <div class="control-tab">
          <div class="tab-item">
            <img src="./images/目录.png" alt="">
            <span>目录</span>
          </div>
          <div class="tab-item">
            <img src="./images/月亮.png" alt="">
            <span>夜间</span>
          </div>
          <div class="tab-item">
            <img src="./images/设置.png" alt="">
            <span>设置</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import turn from '@/utils/turn.js'
import {addBook,getUserBookShelf,addReadHis} from "@/api/index.js"
import { Toast } from 'vant';
// $("#flipbook").turn({
// 		width: 400,
// 		height: 300,
// 		autoCenter: true
// 	});
export default {
  data() {
    return {
      value: 50,
      book:[],
      bookshelf:[],
      isAdd:false,
      isReading:false,
      screenWidth: document.body.clientWidth,     // 屏幕宽
      screeHeight: window.innerHeight,    // 屏幕高
      page:0
    };
  },
  methods: {
    back(){
      console.log(1111);
      this.$router.go(-1)
    },
    showCtr(){
      this.isReading = !this.isReading
    },
   async addBookshelf(){
     if(!this.isAdd){
       const res = await addBook({
         readingtime:0,
         userid:this.$store.state.userId,
         bookid:this.book.id,
         photos:this.book.cover,
         title:this.book.name
     })
     Toast.success('添加成功');
     this.isAdd = true
     }else{
       Toast.fail('添加失败，书架已有此书');
     }
     
    //  console.log(res);
    }
  },
 async created() {
    // console.log(this.$route);
    this.book = this.$route.params.obj
    console.log(this.book);
    const res = await getUserBookShelf({
      id:this.$store.state.userId
    })
    this.bookshelf = res.data
    this.isAdd = this.bookshelf.some(item=>item.bookid === this.book.id)
  },
 async mounted() {
  this.$nextTick(() => {
        // Create the flipbook
        $('.flipbook').turn({
          width:this.screenWidth,
          height:this.screeHeight,
          acceleration:true,
          elevation: 200,
          gradients: true,
          autoCenter: false,
          display:'single'
        });
    });
    // $('.flipbook').turn('peel','bl')
    $(".flipbook").bind("turned", async(event,page,view)=>{
      this.page = page
      if(page === 2){
            const res = await addReadHis({
            bookid:this.book.id,
            bookname:this.book.name,
            cover:this.book.cover,
            intro:this.book.intro,
            userid:this.$store.state.userId
          })
          console.log(res);
          console.log(111);
      }
    }     // console.log("page"+page)
    )
 }, 
}
</script>

<style lang="less" scoped>
.flipbook{
  position: relative;
}
.book-detail{
  // padding-top: 20px;
  width: 100%;
  height: 100%;
  background-color: #ddd9c7;
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      margin-top: 15px;
      font-size: 22px;
      color: #000;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .text{
      margin-top: 15px;
      overflow: hidden;
    p{
      font-size: 20px;
      width: 340px;
      line-height: 40px;
    }
    }
  }
  .detail-nav{
    z-index: 9999;
    margin-top: 20px;
    width: 100%;
    padding: 0 20px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    .nav-fn{
      display: flex;
      align-items: center;
      color: #5b4a2e;
      font-weight: 510;
      .nav-add{
        margin-right: 15px;
      }
      .nav-recommend{
        margin-right: 15px;
      }
      .nav-install{
        position: relative;
        margin-right: 18px;
        .icon{
          font-size: 8px;
          position: absolute;
          top: -8px;
          right: -13px;
          color: #fff;
          background-color: #e86e37;
          border-radius: 30%;
          padding: 3px 5px;
        }
      }
    }
  }
  .book-info{
    padding-top: 10px;
    margin-top: 11px;
    height: 220px;
    background-color: #d7d3c1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info-cover{
      width: 90px;
      height: 125px;
      border-radius: 10px;
      margin-bottom: 14px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    >span{
      font-size: 20px;
      color: #483518;
      font-weight: bold;
    }
    .info-author{
      margin-top: 14px;
      display: flex;
      align-items: center;
      font-size: 8px;
      span{
        font-size: 12px;
        color: #6382ac;
        margin-right: 7px;
      }
      .info-status{
        color: #7a6c53;
        margin-right: 0;
        margin-left: 7px;
      }
    }
  }
  .book-content{
    width: 100%;
    height: 60vh;
    padding-left: 30px;
    padding-right: 40px;
    .content-title{
      display: flex;
      .title-score,.title-read{
      margin-top: 23px;
      display: flex;
      flex-direction: column;
        >span{
        font-size: 16px;
        font-weight: bold;
        color: #847862;
          span{
            font-size: 12px;
            color: #847862;
          }
        }
        .score-person,.read-person{
          font-size: 10px;
          color: #b0a791;
        }
      }
      .title-score{
        margin-right: 61px;
      }
    }
    .content-intro{
      margin-top: 28px;
      display: flex;
      align-items: center;
      >span{
        font-size: 18px;
        color: #4b3b22;
        margin-right: 8px;
        font-weight: bold;
      }
      .intro-icon{
        display: flex;
        .intro-icon-item{
          margin-right: 8px;
          font-size: 12px;
          color: #90856d;
          background-color: #cdc8b4;
          border-radius: 25%;
          padding: 4px 7px;
          font-weight: 600;
        }
      }
    }
    .content-words{
      margin-top: 13px;
      font-size: 14px;
      color: #9a9078;
      line-height: 21px;
      font-weight: 600;
    }
  }
  .book-control{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 110px;
    background-color: #ddd9c7;
    border-top: 1px solid #d8d4c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .control-btn{
      margin-top: 13px;
      display: flex;
      align-items: center;
      .slider{
        width: 220px;
      }
      .pre{
        color: #9f9d91;
        font-size: 15px;
        margin-right: 15px;
        font-weight: 500;
      }
      .next{
        color: #6b5b41;
        font-size: 15px;
        margin-left: 15px;
        font-weight: 500;
      }
    }
    .control-tab{
      margin-top: 22px;
      width: 255px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        margin-bottom: 2px;
      }
      span{
        font-size: 12px;
        color: #796b52;
        font-weight: bold;
      }
    }
  }
  .listen{
    position: absolute;
    bottom: 110px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 25px;
    color: #fff;
    background-color: #483518;
    text-align: center;
    line-height: 50px;
  }
}
</style>