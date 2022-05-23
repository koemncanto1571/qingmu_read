<template>
  <div>
    <div class="big-box">
      <div class="nro">
        <div class="circumference">
          <div class="circumference1">
            <img src="./images/4.png" width="100%" alt="">
          </div>
          <div>
            <div class="circumference2">
              方圆十七Bali。
            </div>
            <div class="circumference3">
              爱看风景的小唐！
            </div>
          </div>
          <div class="time">2022-3-08</div>
        </div>
        <div class="tu">
          <div class="tu1">
            <img src="./images/主体1.png" width="100%" alt="">
          </div>
          <div class="tu1">
            <img src="./images/主体2.png" width="100%" alt="">
          </div>
          <div class="tu1">
            <img src="./images/主体3.png" width="100%" alt="">
          </div>
        </div>
        <div class="tu2">
          <div class="tu1">
            <img src="./images/主体4.png" width="100%" alt="">
          </div>
          <div class="tu1">
            <img src="./images/主体5.png" width="100%" alt="">
          </div>
          <div class="tu1">
            <img src="./images/主体6.png" width="100%" alt="">
          </div>
        </div>
        <div class="dot">
          <div class="dot1">
            <img src="./images/点赞.png" width="100%" alt="">
          </div>
          <div class="dot2">1176</div>
          <div class="dot1">
            <img src="./images/收藏.png" width="100%" alt="">
          </div>
          <div class="dot2">116</div>
          <div class="dot1">
            <img src="./images/分享.png" width="100%" alt="">
          </div>
          <div class="dot2">431</div>
        </div>
        <div class="evaluate">
          <div class="evaluate1"><img src="./images/1.png" width="100%" alt=""></div>
          <div class="evaluate2">红玫瑰： </div>
          <div class="evaluate3">有着理想主义般的新闻理想，坚持原创，有客观理性的态度，
            “澎湃如昨”铿锵有力，成为新闻垃圾中的一股清流。</div>
        </div>
        <div class="evaluate">
          <div class="evaluate1"><img src="./images/2.png" width="100%" alt=""></div>
          <div class="evaluate2">红玫瑰： </div>
          <div class="evaluate3">我读过很多书，但后来大部分都被我忘记了，那阅读的意义
            是什么?当我还是个孩子的时候。。</div>
        </div>
        <div class="evaluate">
          <div class="evaluate1"><img src="./images/3.png" width="100%" alt=""></div>
          <div class="evaluate4">白花绿茶： </div>
          <div class="evaluate3">学习是孤独的，成长也是孤独的，板凳要坐十年冷，文章
            不写一句空，突然发现原来还有远方的人与我一起学习.</div>
        </div>
        <div class="evaluate5">
          <div class="evaluate6">
            <img src="./images/4.png" width="100%" alt="">
          </div>
          <div class="evaluate7">：上善若水</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabList from "@/components/TabList/index.vue"
export default {
name:'detect',
components:{TabList}
}
</script>

<style scoped>
.big-box{
    width: 375px;
    height: 700.5px;
    margin: auto;
    background-color: #8B8B8B;
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
.nro{
    width: 345px;
    height: 560px;
    background-color: #FFFFFF;
    border-radius: 14px;
    margin-left: 15px   ;
}
.circumference{
    display: flex;
}
.circumference1{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: 17px;
    margin-left: 16px;
}
.circumference2{
    margin-left: 19px;
    margin-top: 19px;
    font-size: 14px;
}
.circumference3{
 font-size: 10px ;
 margin-left: 19px;
 margin-top: 7px;
}
.time{
    margin-left: 100px;
    font-size: 10px;
    margin-top: 24px;
}
.tu{
    display: flex;
    width: 311px;
    margin-top: 23px;
    margin-left: 16px;
}
.tu1{
    width: 99px;
    height: 99px;
    margin-left: 7px;
}
.tu2{
    display: flex;
    width: 311px;
    margin-top: 9px;
    margin-left: 16px;
}
.dot{
    display: flex;
    margin-top: 19px;
    margin-left: 155px;
}
.dot1{
    width: 22px;
    height: 22px;
    margin-left: 12px;
}
.dot2{
    font-size: 12px;
    margin-top: 8px;
}
.evaluate{
    margin-top: 25px;
    width: 311px;
    height: 25px;
    display: flex;
    margin-left: 16px;
}
.evaluate1{
    width: 25px;
    height: 25px;
}
.evaluate2{
 font-size: 12px;
 width: 53px;
 height: 12px;
 margin-top: 5px;
 margin-left: 6px;
}
.evaluate3{
    font-size: 8px;
    width: 234px;
    margin-left: 2px ;
    margin-top: 5px;
}
.evaluate4{
    font-size: 12px;
 width: 73px;
 height: 12px;
 margin-top: 5px;
 margin-left: 6px;
}
.evaluate5{
    outline: auto 1px black;
    margin-top: 30px;
    width: 314px;
    height: 34px;
    margin-left: 16px;
    display: flex   ;
    border-radius: 10px;
    
}
.evaluate6{
    padding-top: 3px;
    margin-left: 12px;
    width: 25px;
}
.evaluate7{
    margin-top: 7px;
    font-size: 10px;
    margin-left: 4px;
}
</style>