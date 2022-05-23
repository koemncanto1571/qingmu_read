<template>
  <div>
    <div class="voice">
      <div class="voice-title">
        <div class="voice-nav">
          <span>有声精选</span>
          <span>精品课</span>
          <span>享听</span>
          <span>出版</span>
        </div>
        <div class="voice-title-btn">
          <div class="title-icon">
            <img src="./images/右箭头.png" alt="">
          </div>
          <div class="title-search">
            <img src="./images/放大镜.png" alt="">
          </div>
        </div>
      </div>
      <div class="voice-classify">
        <img src="./images/分类.png" alt="">
      </div>
      <div class="voice-banner">
        <div class="voice-banner-item">
          <img src="./images/屏幕截图2022-04-15082137.png" alt="">
        </div>
      </div>
      <div class="voice-list">
        <div class="voice-list-item">
          <img src="./images/list1.png" alt="">
          <span>热听榜</span>
        </div>
        <div class="voice-list-item">
          <img src="./images/list2.png" alt="">
          <span>领阅饼</span>
        </div>
        <div class="voice-list-item">
          <img src="./images/list3.png" alt="">
          <span>全部分类</span>
        </div>
        <div class="voice-list-item">
          <img src="./images/list4.png" alt="">
          <span>免费</span>
        </div>
        <div class="voice-list-item">
          <img src="./images/list5.png" alt="">
          <span>上新</span>
        </div>
      </div>
      <div class="voice-content">
        <span>火热精品</span>
        <div class="voice-content-card">
          <div class="voice-card-img">
            <img src="./images/card1.png" alt="">
          </div>
          <div class="voice-card-detail">
            <div class="voice-card-name">
              权重嫡女：劫后重生
            </div>
            <div class="voice-card-status">
              <span>[连载中]</span>
              <div>她系名门......</div>
            </div>
            <div class="voice-card-tag">
              <div>重生</div>
              <span>7376在听</span>
            </div>
          </div>
        </div>
        <div class="voice-book-list">
          <div class="book-list-item">
            <img src="./images/card2.png" alt="">
          </div>
          <div class="book-list-item">
            <img src="./images/card3.png" alt="">
          </div>
          <div class="book-list-item">
            <img src="./images/card4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Voice'
}
</script>

<style scoped>
    .voice {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgb(243, 243, 243);
      padding-bottom: 45px;
    }

    .voice-title {
      margin-top: 34px;
      padding: 0 20px 0 14px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .voice-nav span {
      margin-right: 13px;
      font-size: 18px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #8B8B8B;
    }

    .voice-title-btn {
      display: flex;
      align-items: center;
    }

    .title-icon {
      width: 10px;
      height: 18px;
      margin-right: 30px;
    }

    .title-icon img {
      width: 100%;
      height: 100%;
    }

    .title-search {
      width: 20px;
      height: 24px;
    }

    .title-search img {
      width: 100%;
      height: 100%;
    }

    .voice-classify {
      margin-top: 28px;
      margin-bottom: 31px;
      padding-right: 32px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .voice-classify img {
      width: 30px;
    }

    .voice-banner-item {
      width: 307px;
      height: 124px;
      border-radius: 13px;
      overflow: hidden;
    }

    .voice-banner-item img {
      width: 100%;
    }

    .voice-list {
      margin-top: 24px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
    }

    .voice-list-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .voice-list-item img {
      width: 26px;
      height: 26px;
      margin-bottom: 11px;
    }

    .voice-list-item span {
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
    }

    .voice-content {
      margin-top: 22px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .voice-content>span {
      margin-bottom: 14px;
      width: 100%;
      padding-left: 45px;
      font-size: 16px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
    }

    .voice-content-card {
      width: 313px;
      height: 101px;
      background: #FFFFFF;
      border-radius: 17px 14px 14px 12px;
      display: flex;
      padding-top: 8px;
      padding-left: 13px;
      margin-bottom: 10px;
    }

    .voice-card-img {
      width: 61px;
      height: 91px;
      border-radius: 10px 6px 8px 8px;
      overflow: hidden;
    }

    .voice-card-img img {
      width: 100%;
    }

    .voice-card-detail {
      flex: 1;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
    }

    .voice-card-name {
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #000000;
      margin-bottom: 12px;
    }

    .voice-card-status {
      display: flex;
      justify-content: space-between;
      padding-right: 21px;
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #777777;
      margin-bottom: 23px;
    }

    .voice-card-tag {
      display: flex;
      align-items: center;
    }

    .voice-card-tag div {
      width: 28px;
      height: 13px;
      border: 1px solid #727375;
      border-radius: 3px 2px 2px 2px;
      font-size: 8px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #777777;
      text-align: center;
      margin-right: 24px;
    }

    .voice-card-tag span {
      font-size: 12px;
      font-family: "PingFangSC";
      font-weight: bold;
      color: #777777;
    }

    .voice-book-list {
      width: 314px;
      height: 154px;
      background: #FFFFFF;
      border-radius: 17px 14px 14px 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .book-list-item {
      width: 84px;
      height: 125px;
      border-radius: 10px 6px 8px 8px;
      overflow: hidden;
    }

    .book-list-item img {
      width: 100%;
    }
  </style>