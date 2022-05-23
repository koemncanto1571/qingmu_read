import Vue from 'vue'
import { Toast } from 'vant';
import store from "@/store/index.js"
import VueRouter from 'vue-router'
import LoginMobile from "@/views/Login/login-mobile.vue"
import Login from "@/views//Login/login.vue"
import Home from "@/views/Home/home.vue"
import User from "@/views/Users/user.vue"
import BookShelf from '@/views/BookShelf/bookShelf.vue';
import Find from "@/views/Find/index.vue"
import Circles from "@/views/Find/circles.vue"
import Topic from "@/views/Find/topic.vue"
import Square from "@/views/Find/square.vue"
import Voice from "@/views/Voice/voice.vue"
import Vip from "@/views/Vip/index.vue"
import Test from "@/views/test.vue"
import BookDetail from "@/views/BookDetail/index.vue"
import UserEdit from "@/views/UserEdit/index.vue"
import LoginAccount from "@/views/Login/login-account.vue"
import Register from "@/views/Login/register.vue"
import Search from "@/views/Search/index.vue"
import SearchResult from "@/views/Search/SearchResult.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    meta:{isNav:1,active:1,index:0},
    component:Home
  },
  {
    path:'/search',
    name:'Search',
    meta:{index:1},
    component:Search
  },
  {
    path:'/search-result/:keywords',
    name:'SearchResult',
    meta:{index:2},
    component:SearchResult
  },
  {
    path:'/login',
    name:'Login',
    meta:{index:1},
    component:Login
  },
  {
    path:'/login-mobile',
    name:'LoginMobile',
    meta:{index:2},
    component:LoginMobile
  },
  {
    path:'/login-account',
    name:'LoginAccount',
    meta:{index:3},
    component:LoginAccount
  },
  {
    path:'register',
    name:'Register',
    meta:{index:4},
    component:Register
  },
  {
    path:'/user',
    name:'User',
    meta:{isNav:1,index:0,active:4},
    component:User
  },
  {
    path:'/book-shelf',
    name:'BookShelf',
    meta:{isNav:1,active:0},
    component:BookShelf
  },
  {
    path:'/find',
    name:'Find',
    component:Find,
    meta:{isNav:1,active:3},
    redirect:'/find/square',
    children:[
      {
        path:'circles',
        meta:{isNav:1},
        component:Circles
      },
      {
        path:'topic',
        meta:{isNav:1},
        component:Topic
      },
      {
        path:'square',
        meta:{isNav:1},
        component:Square
      }
    ]
  },
  {
    path:'/voice',
    name:'Voice',
    meta:{isNav:1,active:2},
    component:Voice
  },
  {
    path:'/vip',
    component:Vip
  },
  {
    path:'/test',
    component:Test
  },
  {
    path:'/book-detail',
    name:'bookDetail',
    component:BookDetail
  },
  {
    path:'user-edit',
    name:'userEdit',
    meta:{index:1},
    component:UserEdit
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path === 'user-edit'){
    if(store.state.userId !== ''){
      next()
    }else{
      Toast.fail('请先登录！')
      router.push({
        name:'Login'
      })
    }
  }else{
    next()
  }
})

export default router
