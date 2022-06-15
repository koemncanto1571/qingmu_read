import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import turn from '@/utils/turn.js'
import "amfe-flexible"
import {SwipeCell ,PullRefresh,Tab, Tabs,Notify,Dialog,Tag,Card,Search,Uploader,Popup,DatetimePicker,Icon,Tabbar, TabbarItem,NavBar,RadioGroup, Radio,Swipe, SwipeItem,Badge,Slider,Toast,Cell, CellGroup,Image as VanImage,CountDown,Field,Button,Form,Picker } from 'vant';
import directiveObj from "@/utils/directive.js"

Vue.use(SwipeCell);
Vue.use(PullRefresh)
Vue.use(turn)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Picker);
Vue.use(directiveObj)
Vue.use(Notify)
Vue.use(Card);
Vue.use(Tag);
Vue.use(Dialog)
Vue.use(DatetimePicker);
Vue.use(Search);

Vue.use(Uploader);
Vue.use(Popup);

Vue.use(Field);
Vue.use(Form);
Vue.use(Button);
Vue.use(CountDown);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup); 
Vue.use(Toast);
Vue.use(Slider);
Vue.use(Badge);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Radio);
Vue.use(RadioGroup);

Vue.use(NavBar);

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

Vue.config.productionTip = false
router.afterEach((to,from,next) => {
  window.scrollTo(0,0); //切换路由之后滚动条始终在最顶部
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
