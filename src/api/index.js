import request from "@/utils/request.js";
import store from "../store";
export const getBookInfoAPI = ()=> request({
  url:'/readinfo/book',
  method:'GET'
}) 
export const getRecommendAPI = ()=> request({
  url:`/readinfo/findseat`,
  method:'get',
  params:{
    seat:'recommend'
  }
})

export const getHotBookAPI =()=> request({
  url:'/readinfo/findseat',
  method:'get',
  params:{
    seat:'popular'
  }
})

export const getRankImgAPI = ()=> request({
  url:'/readinfo/icon',
  method:'GET'
})

export const addBook = (bookshelf)=> request({
  url:'/readinfo/addbookshelf',
  method:'POST',
  data:bookshelf
})

export const getAllbookshelf =()=> request({
  url:'/readinfo/findall',
  method:'post'
})

export const deleteBookAPI = ({id})=> request({
  url:'/readinfo/delbookshelf',
  method:'post',
  params:{
    bookid:id
  }
})

export const getUserInfoAPI = ()=> request({
  url:'/readinfo/findAll',
  method:'post'
})

export const getPhoneVerification = (telephone)=> request({
  url:'/readinfo/smsSend',
  method:'post',
  params:{
    telephone
  }
})

export const SearchAPI = (name)=> request({
  url:'/readinfo/find',
  method:'get',
  params:{
    name
  }
})

export const registerAPI = ({account,password,username})=> request({
  url:'/readinfo/insertRole',
  method:'post',
  params:{
    account:account,
    password:password,
    nickname:username
  }
})

export const loginAccountAPI = ({account,password})=>request({
  url:'/readinfo/loginAcc',
  method:'post',
  params:{
    account:account,
    password:password
  }
})

export const findUserAPI = ({id})=> request({
  url:'/readinfo/findid',
  method:'post',
  params:{
    userid:id
  }
})

export const modifyUserAPI = (dataObj)=> {
  const obj = {
    userbir:'',
    nickname:'',
    usersex:'',
    introduction:'',
    file:''
  }
  for (const prop in obj) {
    if (dataObj[prop] === undefined) {
      delete dataObj[prop]
    } else {
      obj[prop] = dataObj[prop]
    }
  }
  obj.userid=store.state.userId
  return request({
    url:'/readinfo/updatepersonal',
    method:'post',
    params:obj
  })
}