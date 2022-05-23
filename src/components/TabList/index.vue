<template>
  <van-tabbar v-model="active" active-color="#000" @change="changeFn">
    <van-tabbar-item to="/book-shelf" :class="[active == 0?'activeFont':'']">
      <span>书架</span>
      <template #icon="props">
        <img :src="props.active ? require('@/components/TabList/images/书架.png') : require('@/components/TabList/images/书架.png')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/home" :class="[active == 1?'activeFont':'']">
      <span>书城</span>
      <template #icon="props">
        <img :src="props.active ? require('@/components/TabList/images/书城.png') : require('@/components/TabList/images/书城.png')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/voice" :class="[active == 2?'activeFont':'']">
      <span>听书</span>
      <template #icon="props">
        <img :src="props.active ? require('@/components/TabList/images/听书.png') : require('@/components/TabList/images/听书.png')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/find" :class="[active == 3?'activeFont':'']">
      <span>发现</span>
      <template #icon="props">
        <img :src="props.active ? require('@/components/TabList/images/发现.png') : require('@/components/TabList/images/发现.png')" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/user" :class="[active == 4?'activeFont':'']">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? require('@/components/TabList/images/我的.png') : require('@/components/TabList/images/我的.png')" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
name:'TabList',
 data() {
    return {
      active: 1,
    };
  },
  methods:{
    changeFn(active){
    }
  },
  created(){
    this.active = this.$route.meta.active
  }
}
</script>

<style>
.tab {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 45px;
      background-color: rgb(242, 243, 247);
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
    }

    .tab-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    .tab-item img {
      width: 24px;
    }

    .tab-item span {
      font-size: 10px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: #000;
    }
  .activeFont{
    font-size: 14px;
    font-weight: bold;
  }
</style>