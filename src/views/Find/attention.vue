<template>
  <div>
    <div class="as-1">
      <div class="as-1-img">
        <img src="./img/5.png">
      </div>
      <div class="as-1-tet">
        <div class="as-1-tet-01">
          <div class="as-1-01">
            无限会员日
          </div>
          <div class="as-1-02">
            组队抽取终身无限卡
          </div>
        </div>
        <div class="as-1-tet-02">
          <div class="as-1-03">
            +
          </div>
          <div class="as-1-04">
            更多
          </div>
        </div>
        <div class="as-1-tet-03">
          <div class="as-1-05">
            免费抽奖
          </div>
        </div>
      </div>
    </div>
    <div class="as-2">
      <b>你可能感兴趣的话题</b>
    </div>
    <div class="as-3">
      <div class="axx1">
        <div class="as-3-01">
          <img src="./img/2.png">
        </div>
      </div>
      <div class="axx2">
        <div class="as-3-02">
          <div class="as-3-02-1">
            今天你读书了吗
          </div>
          <div class="as-3-02-2">
            加入
          </div>
        </div>
        <div class="as-3-03">
          书籍好比钥匙,它能帮助我们打开知识的大门;
          书籍好比帆船,它能帮助我们驶向成功的彼岸;
          书籍好比阳光,它能帮助我们扫除内心的黑暗;
        </div>
      </div>
    </div>
    <div class="as-3">
      <div class="axx1">
        <div class="as-3-01">
          <img src="./img/1.png">
        </div>
      </div>
      <div class="axx2">
        <div class="as-3-02">
          <div class="as-3-02-1">
            今天又多巩固了吗
          </div>
          <div class="as-3-02-2">
            加入
          </div>
        </div>
        <div class="as-3-03">
          读书是苦的,不过,它超乎寻常的收获,却是甜的,
          干什么都要分个先后,读书也一样,
          如果说书籍是人类的营养品,那读书不就成了做营养品的厨师
        </div>
      </div>
    </div>
    <div class="as-3">
      <div class="axx1">
        <div class="as-3-01">
          <img src="./img/3.png">
        </div>
      </div>
      <div class="axx2">
        <div class="as-3-02">
          <div class="as-3-02-1">
            今天你思考了吗
          </div>
          <div class="as-3-02-2">
            加入
          </div>
        </div>
        <div class="as-3-03">
          书让你走人生路途唱出春花秋月，落英缤纷；
          书让你在浩瀚海洋中尽情畅游；
          书点燃希望，让你在无穷无尽的人生漫漫路上永远不会迷失方
        </div>
      </div>
    </div>
    <div class="as-3">
      <div class="axx1">
        <div class="as-3-01">
          <img src="./img/4.png">
        </div>
      </div>
      <div class="axx2">
        <div class="as-3-02">
          <div class="as-3-02-1">
            今天你有新的理解了吗
          </div>
          <div class="as-3-02-2">
            加入
          </div>
        </div>
        <div class="as-3-03">
          时间在飞逝，日积月累，许多书籍都成了我形影不离的伙伴。
          那五花八门、形形色色的报纸，也是我必读不可的。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import axios from "axios"
export default {
  created(){
			axios.get('http://124.223.191.233:8090/readinfo/findguangchang').then((res)=>{
				console.log(res)
			})
		}
}
</script>

<style>
.ass{
		width: 375px;
		height: 738px;
		/* outline: 1px solid #000; */
		margin: auto;
		background-color: #f3f2f2;
	}
	.a1{
		width: auto;
		height: 74px;
		display: flex;
	}
	.a1-0-1{
		width: 36px;
		height: 20px;
		margin-top: 33px;
		margin-left: 13px;
		color: #787878;
		font-size: 18px;
	}
	.a1-0-1:hover{
		color: #000000;
	}
	.a1-0-2{
		width: 36px;
		height: 20px;
		margin-top: 33px;
		margin-left: 30px;
		color: #787878;
		font-size: 18px;
	}
	.a1-0-2:hover{
		color: #000000;
	}
	.a1-0-3{
		width: 36px;
		height: 17px;
		margin-top: 33px;
		margin-left: 26px;
	}
	.a1-0-3 img{
		
		height: 100%;
	}
	.as-1{
		width: 345px;
		height: 152px;
		/* outline: 1px solid #000; */
		margin: auto;
		border-radius: 12.5px;
		overflow: hidden;
		background-color: #FFFFFF;
		box-shadow: 0px 5px 5px 0px #B5B5B5;
	}
	.as-1-img{
		width: 343px;
		height: 77px;
	}
	.as-1-img img{
		width: 100%;
		height: 100%;
	}
	.as-1-tet{
		width: 343px;
		height: 77px;
		display: flex;
	}
	.as-1-tet-01{
		width: 139px;
		height: 100%;
		
	}
	.as-1-tet-02{
		width: 67px;
		height: 100%;
		display: flex;
	}
	.as-1-tet-03{
		width: 147px;
		height: 100%;
		
	}
	.as-1-01{
		width: 75px;
		height: 14px;
		font-weight: bold;
		font-size: 13px;
		color: #696969;
		margin: 13px 0px 0px 16.5px;
	}
	.as-1-02{
		width:100%;
		height: 10px;
		font-size: 4px;
		color: #B3B3B3;
		margin: 16.5px 0px 21.5px 16px;
	}
	.as-1-03{
		width: 28px;
		height: 28px;
		border-radius: 50%;
		outline: 1px solid #B5B5B5;
		margin: 29.5px 0px 18px 0px;
		font-size: 10px;
		color: #000000;
		text-align: center;
		line-height: 28px;
	}
	.as-1-04{
		width: 28px;
		height: 28px;
		border-radius: 50%;
		outline: 1px solid #B5B5B5;
		margin: 29.5px 0px 18px 11px;
		font-size: 10px;
		color: #000000;
		text-align: center;
		line-height: 28px;
	}
	.as-1-05{
		width: 72.5px;
		height: 26.5px;
		border-radius: 13.25px;
		outline: 1px solid #B5B5B5;
		margin: 29px 15.5px 15px 44px;
		font-size: 10px;
		color: #000000;
		text-align: center; 
		line-height: 26.5px;
	}
	.as-2{
		width: 140px;
		height: 14.5px;
		/* outline: 1px solid #000; */
		margin: 24px 0px 0px 31px;
		font-size: 15px;
	}
	.as-3{
		width: 345px;
		height: 75px;
		/* outline: 1px solid #000; */
		margin: 20px 15px ;
		display: flex;
		border-radius: 10px;
		background-color: #FFFFFF;
		box-shadow: 0px 5px 5px 0px #B5B5B5;
	}
	.as-3-01{
		width: 68px;
		height: 68px;
		outline: 1px solid #FFFFFF;
		margin: 3.5px 9px 3.5px 16px;
		border-radius: 50%;
		overflow: hidden;
	}
	.as-3-01 img{
		width: 100%;
		height: 100%;
	}
	.as-3-02{
		width: 100%;
		height: 23px;
		/* outline: 1px solid #000; */
		display: flex;
	}
	.as-3-02-1{
		width: 210px;
		height: 11.5px;
		/* outline: 1px solid #000; */
		margin: 5px 0px ;
		font-size: 12px;
		font-weight: bold;
		background-color: #FFFFFF;
	}
	.as-3-02-2{
		width: 30px;
		height: 13px;
		outline: 1px solid #B5B5B5;
		margin: 5px 0px 5px 10px;
		font-size: 8px;
		text-align: center;
		line-height: 13px;
		border-radius: 6.5px;
		color: #3E3E3E;
		background-color: #FFFFFF;
	}
	.as-3-03{
		width: 100%;
		height: 52px;
		/* outline: 1px solid #000; */
		font-size: 5px;
		color: #585858;
	}
	.axx1{
		width: 93px;
		height: 100%;
	}
	.axx2{
		width: 252px;
		height: 100%;
		
	}
	.as-4{
		width: 345px;
		height: 39px;
		/* outline: #000000 solid 1px; */
		margin-top: 39px;
		margin-left: 15px;
		margin-right: 15px;
		display: flex;
	}
	.as-4-1{
		width: 25px;
		height: 39px;
		margin: auto;
	}
	.as-4-1-01 img{
		width: 20px;
		height: 17px;
	}
	.as-4-1-02 {
		width: 20px;
		height: 1px;
		outline: #000000 solid 1px;
	}
	.as-4-1-03 {
		width: 28px;
		height: 10px;
		font-size: 10px;
		color: #A7A7A7;
		margin: auto;
	}
	.as-4-1-03:hover{
		color: #000000;
	}
</style>