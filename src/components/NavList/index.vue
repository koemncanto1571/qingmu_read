<template>
  <div class="nav">
    <div class="nav-list">
      <router-link v-for="(item,index) in navList" :key="index" :to="item.url" active-class="active">{{ item.title }}</router-link>
    </div>
    <div class="nav-more">
      ...
    </div>
  </div>
</template>

<script>
export default {
name:'NavList',
data() {
  return {
    navList:[
      {
        title:'精选',
        url:'/home'
      },
      {
        title:'男生',
        url:'/login'
      },
      {
        title:'女生',
        url:'/login-mobile'
      },
      {
        title:'漫画',
        url:'/login'
      },
      {
        title:'古代言情',
        url:'/login'
      },
      {
        title:'VIP专区',
        url:'/login'
      }
    ]
  }
},
}
</script>

<style>
  .nav {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 0 15px;
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      background-color: #fff;
    }

    .nav-list {
      flex: 1;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: 600;
      color: #000;
      padding-bottom: 10px;
    }

    .nav-more {
      font-size: 30px;
      margin-left: 26px;
      padding-bottom: 5px;
    }
    .active{
      color: #85635A ;
    }
</style>