<template>
  <div class="edit">
    <van-nav-bar title="基本信息" left-arrow @click-left="onClickLeft" />
    <van-cell-group class="info">
      <van-cell title="头像" center is-link>
        <template #default>
          <van-image width="1.33rem" height="1.33rem" :src="profile.head" round @click="imgClickFn" />
          <!-- <van-icon name="arrow" size="20px" /> -->
          <input type="file" ref="iptFile" v-show="false" accept="image/*" @change="onFileChange" />
        </template>
      </van-cell>
      <van-cell title="名称" is-link @click="nameClickFn" :value="profile.nickname" />
      <van-cell title="生日" is-link @click="birthdayClickFn" :value="profile.userbir" />
      <van-cell title="性别" is-link @click="genderClickFn" :value="profile.usersex" />
      <van-cell title="介绍" is-link @click="introClickFn" :value="profile.introduction" />
    </van-cell-group>
    <van-dialog v-model="show" title="修改名称" show-cancel-button :before-close="beforeCloseFn">
      <input type="text" v-fofo v-model="inputUserName" ref="inputs" autofocus />
    </van-dialog>
    <van-popup v-model="dateTimePickerShow" position="bottom" round>
      <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate" @cancel="dateTimePickerFn" @confirm="confirmFn" />
    </van-popup>
    <van-popup v-model="sexPickerShow" position="bottom" round>
      <van-picker title="性别" show-toolbar :columns="columns" @cancel="onCancel" @confirm="sexConfirm" :default-index="profile.usersex === '男'?0:1" />
    </van-popup>
    <van-dialog v-model="introShow" title="个人简介" show-cancel-button :before-close="introFn">
      <van-field v-model="message" rows="2" autosize label="简介" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit v-fofo autofocus />
    </van-dialog>
    <van-cell-group>
      <van-cell title="账号id" :value="profile.account" />
    </van-cell-group>
    <div class="exit">
      <van-button type="info" class="exit-btn" round color="linear-gradient(to right, #ff6034, #ee0a24)" @click="exitFn">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import {findUserAPI,modifyUserAPI,updateUserPhoto} from "@/api/index.js"
import {formatDate} from "@/utils/date.js"
import { mapMutations } from "vuex";
import { Notify } from 'vant';
export default {
  data() {
    return {
      profile:[],
      show:false,
      introShow:false,
      inputUserName:'',
      minDate: new Date(1920, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      dateTimePickerShow: false,
      sexPickerShow:false,
      columns: ['男', '女'],
      message:'',
    }
  },
  methods:{
    ...mapMutations(['SET_USERID']),
    onClickLeft(){
      this.$router.go(-1)
    },
    imgClickFn () {
      this.$refs.iptFile.click()
    },
   async onFileChange(e){
      if (e.target.files.length === 0) return
      const theFd = new FormData()
      theFd.append('photo', e.target.files[0])
      console.log(theFd);
      const res =  await updateUserPhoto(theFd)
      console.log(res);
    },
    nameClickFn () {
      this.inputUserName = this.profile.nickname
      this.show = true
    },
    async beforeCloseFn (action, done) {
      if (action === 'confirm') {
        const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{1,7}$/
        if (reg.test(this.inputUserName) === true) {
          const res = await modifyUserAPI({
          // userid:this.$store.state.userId,
          nickname:this.inputUserName
        })
        console.log(res);
        this.profile.nickname = this.inputUserName
          done()
        } else {
          Notify({ type: 'warning', message: '用户名只能是1-7位中英文数字组合' })
          done(false)
        }
      } else {
        done()
      }
    },
    birthdayClickFn () {
      this.dateTimePickerShow = true
      this.currentDate = new Date(this.profile.userbir)
      // console.log(this.currentDate);
    },
    dateTimePickerFn () {
      this.dateTimePickerShow = false
    },
    async confirmFn () {
      const res = await modifyUserAPI({
        // userid:this.$store.state.userId,
        userbir:formatDate(this.currentDate)
      })
      this.dateTimePickerShow = false
      this.profile.userbir = formatDate(this.currentDate)
    },
    genderClickFn(){
      this.sexPickerShow = true
    },
    async sexConfirm(value){
      console.log(value);
      await modifyUserAPI({
        usersex:value
      })
      this.sexPickerShow = false
      this.profile.usersex = value
    },
    onCancel(){
      this.sexPickerShow = false
    },
    introClickFn(){
      this.message = this.profile.introduction
      this.introShow = true
    },
   async introFn(action,done){
     if(action === 'confirm'){
       await modifyUserAPI({
       introduction:this.message.trim()
     })
      this.profile.introduction = this.message.trim()
      done()
     }else{
       done()
     }
    },
    exitFn(){
      Notify({type:"success",message:'退出成功！'})
      this.$router.replace('/user')
      this.SET_USERID('')
    }
  },
  async created() {
    const res = await findUserAPI({
      id:this.$store.state.userId
    })
    // console.log(res);
    this.profile = res.data
    this.sex = this.profile.usersex
    console.log(this.profile);
    console.log(this.currentDate);
  },
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar{
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 7px solid #eee;
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
.info{
  border-bottom: 7px solid #eee;
}
/deep/ .van-dialog__content{
  text-align: center;
  input{
    padding: 0;
    outline: none;
    border: none;
    text-align: center;
  }
}
/deep/ .van-dialog__header{
  padding-top: 15px;
  line-height: 20px;
}
.exit{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.exit-btn{
  margin-top: 50px;
}
</style>