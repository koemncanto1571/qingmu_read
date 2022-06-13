<template>
  <div class="login-content">
    <div class="login-head">
      <van-icon name="arrow-left" size="0.613rem" @click="$router.back()" />
      <span>快捷登录</span>
      <span @click="navToLoginAccount">密码服务</span>
    </div>
    <div class="login-title">
      <span>手机号码登录</span>
    </div>
    <van-form>
      <van-field autofocus v-model="telephone" label="手机号码" placeholder="请输入11位手机号" :rules="[{ required: true, message: '请填写正确手机号', pattern: /^1[3-9]\d{9}$/ }]" />
      <van-field v-model="code" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary" v-if="!isSend" @click="codeFn">发送验证码</van-button>
          <van-button size="small" type="danger" v-else>重新发送({{ countDown }}s)</van-button>
        </template>
      </van-field>
    </van-form>
    <div class="login-affirm">
      <input type="checkbox" v-model="isAffirm">
      <span>我已阅读并同意<span>《用户协议》《售后政策》《隐私政策》</span></span>
    </div>
    <button class="login-code" @click="navToUser">
      <span>登录</span>
    </button>
    <div class="login-ways">
      <div class="ways-wx">
        <div class="wx-icon">
          <img src="../../assets/微信图标.png" alt="">
        </div>
        <span>微信</span>
      </div>
      <div class="ways-qq">
        <div class="qq-icon">
          <img src="../../assets/QQ图标.png" alt="">
        </div>
        <span>QQ</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { mapMutations } from 'vuex'
import { getPhoneVerification,loginByPhoneAPI } from "@/api/index.js"
export default {
  name: "login-mobile",
  data() {
    return {
      telephone: '',
      isAffirm: false,
      isSend: false,
      countDown: 60,
      code: ''
    }
  },
  methods: {
    ...mapMutations(['SET_USERID']),
    async codeFn() {
        //   const reg = /^1[3-9]\d{9}$/
        //   if(reg.test(this.telephone) === true){
        const res = await getPhoneVerification(this.telephone)
        console.log(res);
        if (res.status === 200) {
          Toast.success('短信已发送，请注意查收！');
          this.isSend = true
          let timer = setInterval(() => {
            this.countDown--
            if (this.countDown === 0) {
              this.isSend = false
              this.countDown = 60
              clearInterval(timer)
            }
          }, 1000)
        }
        //   }else{
        //     Toast.fail('请输入正确的手机号码');
        //   }

    },
   async navToUser(){
      if(this.code.length>0){
        if(this.isAffirm){
          const res = await loginByPhoneAPI({
            phone:this.telephone,
            code:this.code
          })
          if(res.status === 200){
            this.SET_USERID(res.data.data.userid)
            Toast.success('登录成功！即将跳转到个人页')
            setTimeout(()=>{
            this.$router.push({
              name:'User',
              params:{
                id:res.data.data.userid
              }
            })
          },2000)
          }
          console.log(res);
        }else{
          Toast.fail('请选勾选用户协议');
        }
      }else{
        Toast.fail('请输入验证码');
      }
    },
    navToLoginAccount(){
      this.$router.push({
        name:'LoginAccount'
      })
    }
  },
}
</script>

<style scoped lang="less">
.login-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

// .login-head span:nth-child(1) {
//   font-size: 24px;
//   font-weight: bold;
// }

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

.login-input {
  display: flex;
  flex-direction: column;
}

.login-input span {
  font-size: 20px;
  font-family: "Adobe Heiti Std";
  font-weight: normal;
  color: #000000;
}

.login-input input {
  width: 200px;
  border: 0;
  /* border-left: 3px solid #ff0000; */
  font-size: 20px;
  outline: 0;
  caret-color: #ff0000;
}

.login-affirm {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-affirm input {
  width: 17px;
  height: 17px;
  margin-right: 6px;
}

.login-affirm>span {
  font-size: 12px;
}

.login-affirm>span span {
  font-size: 12px;
  color: #ff0000;
}

.login-code {
  padding: 10px 0;
  position: relative;
  margin: 45px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: linear-gradient(to right, #ff6034, #ee0a24);
  border-radius: 22px 21px 21px 20px;
  font-size: 18px;
  font-family: "Adobe Heiti Std";
  font-weight: normal;
  color: #FFFFFF;
}

.login-ways {
  font-size: 16px;
  width: 197px;
  height: 109px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 154px;
}

.login-ways img {
  width: 50px;
  height: 50px;
}

.ways-wx,
.ways-qq {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ways-wx {
  margin-left: 20px;
}

.ways-qq {
  margin-right: 20px;
}

.sent {
  background-color: #484848;
}

.block {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 20px;
  color: #fff;
}
</style>