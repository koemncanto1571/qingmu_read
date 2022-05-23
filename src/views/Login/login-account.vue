<template>
  <div class="account">
    <div class="login-head">
      <van-icon name="arrow-left" size="0.613rem" @click="$router.back()" />
      <span>账号密码登录</span>
      <span @click="navToRegister">注册账号</span>
    </div>
    <div class="login-title">
      <span>账号密码登录</span>
    </div>
    <van-field v-model="account" label="账号" placeholder="请输入账号或手机号" autofocus clearable />
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" clearable />
    <van-button type="info" class="login-btn" round color="linear-gradient(to right, #ff6034, #ee0a24)" @click="loginFn">登录</van-button>
  </div>
</template>

<script>
import {loginAccountAPI} from "@/api/index.js"
import { mapMutations } from 'vuex'
import { Toast } from 'vant';
export default {
  data() {
    return {
      account:'',
      password:''
    }
  },
  methods:{
    ...mapMutations(['SET_USERID']),
    navToRegister(){
      this.$router.push({
        name:'Register'
      })
    },
   async loginFn(){
     const res = await loginAccountAPI({
       account:this.account,
       password:this.password
     })
     if(res.data.data === null){
      //  localStorage.setItem('user',JSON.stringify(res.data.data))
       Toast.fail('用户不存在，请先注册')
     }else{
      //  console.log(res);
      console.log(res);

       Toast.success('登录成功！即将跳转到个人页')
       this.SET_USERID(res.data.data.userid)
       setTimeout(()=>{
         this.$router.push({
           name:'User',
           params:{
             id:res.data.data.userid
           }
         })
       },2000)
     }
    }
  }
}
</script>

<style lang="less" scoped>
.account {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-head {
  width: 100%;
  padding: 0 20px;
  margin-top: 37px;
  margin-bottom: 81px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-head span:nth-child(2) {
  font-size: 20px;
  font-weight: bold;
}

.login-head span:nth-child(3) {
  font-size: 12px;
  color: #484848;
}
.login-title {
  font-size: 30px;
  font-family: "Adobe Heiti Std";
  font-weight: normal;
  color: #000000;
  margin-bottom: 79px;
}
.login-btn{
  margin-top: 50px;
  width: 80px;
  height: 30px;
  font-size: 16px;
}
</style>