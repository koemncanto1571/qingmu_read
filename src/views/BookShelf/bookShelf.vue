<template>
  <div>
    <div class="book">
      <div class="book-title">
        <span>书架</span>
        <div class="title-btn">
          <div class="title-search">
            <img src="./images/放大镜.png" alt="">
          </div>
          <div class="title-more">
            <img src="./images/更多分类.png" alt="">
          </div>
        </div>
      </div>
      <div class="book-card">
        <div class="card-head">
          <div class="card-time">
            <span>0</span>
            <div>分钟</div>
          </div>
          <div class="card-more">
            <div class="card-vip">
              <img src="./images/vip.png" alt="">
              <span>免费VIP</span>
            </div>
            <div class="card-sign">
              <img src="./images/签到.png" alt="">
              <span>签到</span>
            </div>
          </div>
        </div>
        <div class="card-img">
          <img src="./images/图层10.png" alt="">
        </div>
      </div>
      <div class="book-content">
        <div class="book-edit" @click="editFn">
          {{edit}}
        </div>
        <template v-if="isLoading">
          <div class="book-item" v-for="(item,index) in allBookshelf" :key="index" @click="navToDetail(item.bookid)">
            <div class="book-del" v-show="isEdited" @click="delFn(item.bookid)">
              <van-icon name="cross" size="0.3466rem" />
            </div>
            <div class="book-cover">
              <img :src="item.photos" alt="">
            </div>
            <span>{{item.title}}</span>
          </div>
        </template>
        <div class="content-item" @click="addBook">
          <img src="./images/添加.png" alt="">
          <span>去书城选好书</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllbookshelf,deleteBookAPI,getBookInfoAPI,getUserBookShelf} from "@/api/index.js"
import { Toast } from 'vant';
import TabList from "@/components/TabList"
export default {
name:'BookShelf',
components:{
  TabList
},
data() {
  return {
    bookshelf:{
      bookid:"13",
      photos:'https://s2.loli.net/2022/05/11/ejRq6kfNBJc9aQT.png',
      title:'测试'
    },
    allBookshelf:[],
    allBook:[],
    edit:'编辑',
    isEdited:false,
    isLoading:false
  }
},
methods:{
 async addBook(){
   this.$router.push('/home')
  },
  editFn(){
    if(this.edit === '编辑'){
      this.isEdited = true
      this.edit = '完成'
    }else{
      this.isEdited = false
      this.edit = '编辑'
    }
  },
  async delFn(id){
    const res = await deleteBookAPI({
      id:id
    })
    // console.log(res);
    console.log(this.allBookshelf.filter(item=>item.bookid !== id));
    this.allBookshelf = this.allBookshelf.filter(item=>item.bookid !== id)
    Toast.success('删除成功');
  },
  navToDetail(id){
    if(this.edit === '编辑'){
      const obj = this.allBook.filter(item=>item.id === id)
      this.$router.push({
      name:'bookDetail',
      params:{
        obj:obj[0]
      }
    })
    }else{
      return
    }
  }
},
async created() {
  // const res = await getAllbookshelf()
  // this.allBookshelf = res.data
  const res2 = await getBookInfoAPI()
  this.allBook = res2.data
  if(this.$store.state.userId !== ''){
    this.isLoading = true
  }
  const res3 = await getUserBookShelf({
    id:this.$store.state.userId
  })
  this.allBookshelf = res3.data
},
beforeCreate () {
    this.$nextTick(()=>{
      document.body.setAttribute('style', 'background:rgb(242, 243, 247)')
    })
  },
  //实例销毁之前钩子--移除body 标签的属性style
  beforeDestroy () {
    document.body.removeAttribute('style')
  }
}
</script>

<style scoped lang="less">
    .book {
      height: 100%;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgb(242, 243, 247);
    }

    .book-title {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .book-title span {
      font-size: 24px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
    }

    .title-btn {
      display: flex;
      align-items: center;
    }

    .title-search {
      width: 20px;
      height: 22px;
      margin-right: 20px;
    }

    .title-search img {
      width: 100%;
      height: 100%;
    }

    .title-more {
      width: 20px;
      height: 22px;
    }

    .title-more img {
      width: 100%;
    }

    .book-card {
      padding-top: 15px;
      margin-top: 26px;
      width: 333px;
      height: 151px;
      background: #FFFFFF;
      border-radius: 24px 20px 20px 16px;
    }

    .card-head {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 0 24px;
    }

    .card-time {
      display: flex;
      align-items: baseline;
    }

    .card-time span {
      font-size: 24px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
      margin-right: 2px;
    }
    .card-time div{
      font-size: 16px;
    }

    .card-more {
      display: flex;
      justify-content: space-between;
    }

    .card-vip,
    .card-sign {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
    }

    .card-vip {
      margin-right: 69px;
    }

    .card-vip img {
      width: 20px;
    }

    .card-sign img {
      width: 22px;
    }

    .card-img {
      margin-top: 12px;
      width: 333px;
      height: 96px;
      border-radius: 24px 20px 20px 16px;
      overflow: hidden;
    }

    .card-img img {
      width: 100%;
    }

    .book-content {
      position: relative;
      width: 100%;
      margin-bottom: 80px;
      margin-top: 50px;
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      .book-edit{
        position: absolute;
        top: -30px;
        right: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      .book-item{
        position: relative;
        width: 29%;
        display: flex;
        flex-direction: column;
        // align-items: center;
        flex-wrap: wrap;
        margin-bottom: 15px;
        margin-right: 20px;
        .book-del{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #f08a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -5px;
          right: -5px;
        }
        .icon{
          position: absolute;
          top: 120px;
          right: 0;
        }
        .book-cover{
          width: 100%;
          height: 144px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        span{
          margin-top: 8px;
          font-size: 12px;
          font-family: "PingFangSC";
          font-weight: bold;
          color: #000000;
        }
      }
      .book-item:nth-of-type(3n+1){
        margin-right: 0;
      }
    }

    .content-item {
      width: 90px;
      height: 144px;
      background: #FFFFFF;
      border-radius: 12px 6px 9px 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content-item img {
      width: 60px;
      margin-top: 31px;
      margin-bottom: 23px;
    }

    .content-item span {
      font-size: 10px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #898989;
    }
  </style>