<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="index">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <TabList v-if="this.$route.meta.isNav === 1"></TabList>
  </div>
</template>

<script>
import TabList from "@/components/TabList/index.vue"
  export default {
    components:{TabList},
    data() {
			return {
				transitionName: ''
			}
		},
		watch: { //使用watch 监听$router的变化
			$route(to, from) {
        if(to.meta.index === undefined || from.meta.index === undefined){
          this.transitionName = '';
          return
        }
				if(to.meta.isNav === 1 && from.meta.isNav === 1){
          this.transitionName = '';
          return
        }
          //如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if (to.meta.index > from.meta.index) {
					//设置动画名称
					this.transitionName = 'slide-left';
				} else {
					this.transitionName = 'slide-right';
				}
			}
		},
    created() {
      // console.log(this.$route);
    }
  }
</script>

<style lang="less">
a{
  color: #000;
  text-decoration: none;
}
.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 200ms;
		position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
	}

	.slide-right-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}

	.slide-right-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.slide-left-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.slide-left-leave-active {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
</style>