<template>
  <div class="register">
    <div class="login-head">
      <van-icon name="arrow-left" size="0.613rem" @click="$router.back()" />
      <span>账号注册</span>
      <van-icon name="cross" size="0.533rem" @click="$router.replace('/login')" />
    </div>
    <van-form @submit="onSubmit">
      <van-field v-model="userAccount" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="username" name="用户昵称" label="用户昵称" placeholder="用户昵称" :rules="[{ required: true, message: '请填写用户昵称' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写6位密码',pattern:/^\d{6}$/ }]" />
      <van-field v-model="affirmPassword" type="password" name="密码" label="确认密码" placeholder="确认密码" :rules="[{ required: true, message: '密码不一致',validator:(affirmPassword)=>affirmPassword===password}]" />
      <!-- <van-field v-model="telephone" name="手机号" label="手机号码" placeholder="手机号码" :rules="[{ required: true, message: '请填写正确的手机号',pattern:/^1[3-9]\d{9}$/ }]" /> -->
      <!-- <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="radioSex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field readonly clickable name="datetimePicker" :value="value" label="生日" placeholder="点击选择生日" @click="showPicker = true" />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker type="date" @confirm="onConfirm" @cancel="showPicker = false" title="选择年月日" :min-date="minDate" :max-date="maxDate" v-model="birthday" />
      </van-popup>
      <van-field v-model="age" label="年龄" placeholder="年龄" />
      <van-field name="uploader" label="头像">
        <template #input>
          <van-uploader v-model="uploader" max-count="1" />
        </template>
      </van-field>
      <van-field v-model="message" rows="2" autosize label="简介" type="textarea" maxlength="50" placeholder="请输入简介" show-word-limit /> -->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="registerFn">确认注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {registerAPI} from "@/api/index.js"
import { formatDate,getAge } from '@/utils/date.js'
import { Toast } from 'vant';
export default {
  data() {
    return {
      userAccount:'',
      username:'',
      password:'',
      affirmPassword:'',
      telephone:'',
      value: '',
    }
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onConfirm() {
      this.showPicker = false;
      this.value = formatDate(this.birthday)
      this.age = getAge(this.value,this.currentTime)
    },
   async registerFn(){
     const res = await registerAPI({
       account:this.userAccount,
       password:this.password,
       username:this.username
     })
     if(res.status === 200){
       Toast.success('注册成功！即将跳转到登录页')
       setTimeout(()=>{
         this.$router.push({
           path:'/login-account'
         })
       },2000)
     }
    }
  },
}
</script>

<style lang="less" scoped>
.register{
  width: 100%;
  height: 100%;
}
.login-head {
  width: 100%;
  padding: 0 20px;
  margin-top: 37px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-head span:nth-child(2) {
  font-size: 20px;
  font-weight: bold;
}
</style>