<template>
  <div class="login">
    <div class="exit-icon" @click="$router.replace('/user')">
      X
    </div>
    <div class="login-content">
      <div class="login-img">
        <img src="../../assets/矩形1拷贝11@2x.png" alt="">
      </div>
      <span>在线阅读省力更省心</span>
      <div class="login-phone">
        <span>本机号码</span>
        <span>198******8890</span>
      </div>
      <div class="login-submit">
        本机号码一键登录
      </div>
      <router-link class="login-verify" to="/login-mobile">
        验证码或密码登录
      </router-link>
      <div class="login-select">
        <input type="checkbox">
        <span>我已同意<span>中国移动认证协议条款</span>及<span>隐私政策用户协议</span></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'login',
  }
</script>

<style lang="less" scoped>
.login{
  height: 100%;
}
    .exit-icon {
      font-size: 16px;
      font-weight: bold;
      margin: 27px 340px 63px 23px;
    }

    .login-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .login-img {
      width: 138px;
      height: 138px;
      margin-bottom: 18px;
    }

    .login-img img {
      width: 100%;
      height: 100%;
    }

    .login-content>span {
      font-size: 16px;
      color: #FA0000;
      margin-bottom: 75px;
    }

    .login-phone {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 55px;
    }

    .login-phone span:nth-child(1) {
      margin-bottom: 35px;
    }

    .login-submit {
      cursor: pointer;
      width: 259px;
      height: 47px;
      background-color: #FD0000;
      font-size: 22px;
      color: #ffffff;
      text-align: center;
      line-height: 47px;
      border-radius: 23px;
      margin-bottom: 27px;
    }

    .login-verify {
      cursor: pointer;
      font-size: 16px;
      color: #898686;
      margin-bottom: 87px;
    }

    .login-select {
      width: 100%;
      padding: 0 20px;
      display: flex;
      align-items: center;
      margin-bottom: 114px;
    }

    .login-select input {
      width: 22px;
      height: 22px;
      margin-right: 16px;
    }

    .login-select span {
      font-size: 16px;
      color: #898686;
    }

    .login-select span span {
      font-size: 16px;
      color: #FF0000;
    }
</style>