<template>
  <div>
    <div class="big-box">
      <div class="gz">
        <router-link class="gz1" to="/find/circles">关注</router-link>
        <router-link class="gz1" to="/find">广场</router-link>
        <router-link class="gz1" to="/find/circles">圈子</router-link>
        <router-link class="gz1" to="/find/topic">话题</router-link>
        <div class="gz1">&gt;</div>
        <div class="gz2"><img src="./images/搜索.png" width="100%" alt=""></div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TabList from "@/components/TabList/index.vue"
export default {
name:'findIndex',
components:{TabList}
}
</script>

<style>
.big-box{
    width: 375px;
    height: 738.5px;
    margin: auto;
  
}
.gz{
    padding-top: 31.5px;
    display: flex;
}
.gz1{
    margin-left: 34px;
    width: 35px;
}
.gz2{
    
    width: 11.5px;
}
.join{
   padding-top: 15.5px;
    width: 345px;
    height: 50px;
    margin: auto;
}
.love{
   padding-top: 15px;
    width: 360px;
    margin: auto;
}
.love1{
    padding-top: 15px;
    width: 325px;
    height: 21px;
    margin: auto;
    display: flex;
}
.love2{
    width: 12px;
    height: 12px;
    margin: auto; 
}
.love3{
    font-size: 10px;
    margin: auto;
}
.nr{
    width: 325px;
    height: 387.5px;
    padding-top: 21.5px;
    margin: auto;
}
.shu{
    display: flex;
    width: 325px;
    height: 37.5px;
    margin: auto;
    justify-content: space-between;  
}
.shu1{
    width: 30px;
    height: 17px ;
}
.shuz{
    padding-top: 10px;
    width: 40px;
    height: 10px;
    font-size: 5px;
    margin-left: 2px;
}
</style>