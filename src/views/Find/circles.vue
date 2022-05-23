<template>
  <div>
    <div class="big-box">
      <div class="kong"></div>
      <div class="renm">
        <div class="rem">
          热门圈子
        </div>
        <div class="rem1">查看全部&gt;</div>
      </div>
      <div class="tu">
        <div class="tu1">
          <img src="./images/音乐圈.png" width="100%" alt="">
          <div class="tuzi">421人关注</div>
          <div class="tuzi1">音乐圈</div>
        </div>
        <div class="tu1">
          <img src="./images/书荒.png" width="100%" alt="">
          <div class="tuzi">216人关注</div>
          <div class="tuzi2">书荒互动</div>
        </div>
        <div class="tu1">
          <img src="./images/音乐圈2.png" width="100%" alt="">
          <div class="tuzi">589人关注</div>
          <div class="tuzi2">音乐圈</div>
        </div>
      </div>
      <div class="kong"></div>
      <div class="laiyuan">
        <div class="lanyuan1">来源于书圈:</div>
        <div class="lanyuan2">#音乐圈#</div>
      </div>
      <div class="evaluate">
        <div class="evaluate1"><img src="./images/1.png" width="100%" alt=""></div>
        <div class="evaluate2">拾玖 </div>
        <div class="evaluate3">关注</div>
      </div>
      <div class="liul">流浪的诗人--味型</div>
      <div class="liu">我读过很多书，但后来大部分都被我忘记了，那阅读的意义是什
        么?当我还是个孩子的时候。我吃过很多食物，现在已经记不起
        来吃过什么了。但可以肯定的是，它们中的一部分已经长成我的
        骨头和肉。阅读对思想的改变也是如此。</div>
      <div class="yi"><img src="./images/阅读.png" width="100%" alt=""></div>
      <div class="yif">
        <div class="yif1">一分钟前</div>
        <div class="dot">
          <div class="dot1">
            <img src="./images/点赞.png" width="100%" alt="">
          </div>
          <div class="dot2">5</div>
          <div class="dot1">
            <img src="./images/收藏.png" width="100%" alt="">
          </div>
          <div class="dot2">7</div>
          <div class="dot1">
            <img src="./images/分享.png" width="100%" alt="">
          </div>
          <div class="dot2">9</div>
        </div>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import TabList from "@/components/TabList/index.vue"
export default {
name:'circles',
components:{TabList}
}
</script>

<style >
.big-box {
    width: 375px;
    height: 738.5px;
    margin: auto;

}

.gz {
    padding-top: 31.5px;
    display: flex;
}

.gz1 {
    margin-left: 34px;
    width: 35px;
}

.gz2 {

    width: 11.5px;
}

.shu {
    display: flex;
    width: 325px;
    height: 37.5px;
    margin: auto;
    margin-top: 10px;
    justify-content: space-between;
}

.shu1 {
    width: 30px;
    height: 17px;
}

.shuz {
    padding-top: 10px;
    width: 40px;
    height: 10px;
    font-size: 5px;
    margin-left: 2px;
}

.kong {
    width: 345px;
    height: 10px;
    background-color: #F4F4F4;
    margin: auto;
    margin-top: 15px;
}

.renm {
    padding-top: 15px;
    padding-left: 16px;
    display: flex;
}

.rem {
    width: 74px;
    height: 18px;
    font-size: 18px;
}

.rem1 {
    width: 62px;
    height: 10px;
    padding-left: 201px;
    font-size: 10px;
    margin-top: 5px;

}

.tu {
    display: flex;
    width: 311px;
    margin-top: 23px;
    margin-left: 16px;
}

.tu1 {
    width: 110px;
    height: 90px;
    margin-left: 7px;
}

.tu2 {
    display: flex;
    width: 311px;
    margin-top: 9px;
    margin-left: 16px;
}

.tuzi {
    font-size: 12px;
    color: #F4F4F4;
    margin-top: -75px;
    text-align: center;
}

.tuzi1 {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
}

.tuzi2 {
    font-size: 12px;
    text-align: center;
    color: #F4F4F4;
    margin-top: 10px;
}

.laiyuan {
    display: flex;
    margin-top: 15px;
    margin-left: 15px;
}

.lanyuan1 {
    color: #8B8B8B;
    font-size: 12px;
}

.lanyuan2 {
    font-size: 12px;
    color: #88BAFE;
}

.evaluate {
    margin-top: 25px;
    width: 311px;
    height: 25px;
    display: flex;
    margin-left: 16px;
}

.evaluate1 {
    width: 28px;
    height: 28px;
}

.evaluate2 {
    font-size: 10px;
    width: 42px;
    height: 10px;
    margin-top: 5px;
    margin-left: 8px;
}

.evaluate3 {
    font-size: 8px;
    width: 54px;
    height: 21px;
    border: 1px solid #88BAFE;
    text-align: center;
    line-height: 21px;
    border-radius: 10px;
    margin-left: 205px;
}

.liul {
    width: 104px;
    height: 12px;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: bold;
    color: #000000;
    line-height: 12px;
    margin-left: 15px;
    margin-top: 14px;
}

.liu {
    width: 344px;
    height: 56px;
    font-size: 11px;
    font-family: PingFangSC;
    font-weight: bold;
    color: #424242;
    line-height: 15px;
    margin-left: 15px;
    margin-top: 14px;
}

.yi {
    width: 345px;
    height: 150px;
    margin: auto;
    margin-top: 15px;
}

.yif {
    display: flex;
    margin-top: 15px;
}

.yif1 {
    width: 50px;
    height: 10px;
    font-size: 10px;
    font-family: PingFangSC;
    font-weight: bold;
    color: #686868;
    line-height: 12px;
    margin-left: 14px;
}

.dot {
    display: flex;
    margin-left: 170px;
}

.dot1 {
    width: 22px;
    height: 22px;
    margin-left: 12px;
}

.dot2 {
    font-size: 12px;
    margin-top: 8px;
}
</style>