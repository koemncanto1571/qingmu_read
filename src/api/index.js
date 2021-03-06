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

export const getPhoneVerification = (phone)=> request({
  url:'/readinfo/smsSend',
  method:'post',
  params:{
    phone
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
    method:'patch',
    params:obj
  })
}

export const updateUserPhoto = (fd)=> request({
  url:'/readinfo/file',
  method:'post',
  data:fd
})

export const loginByPhoneAPI = ({phone,code})=> request({
  url:'/readinfo/loginSms',
  method:'post',
  params:{
    telephoneLogin:phone,
    smsCode:code
  }
})

export const getUserBookShelf = ({id}) => request({
  url:'/readinfo/findId',
  method:'post',
  params:{
    userid:id
  }
})

export const getReadHistory = () => request({
  url:'/readinfo/findBrowsingHistory',
  method:'post'
})

export const getLikeBook = ()=> request({
  url:'/readinfo/findlikesInfo',
  method:'post'
})

export const getReadingBook = ()=> request({
  url:'/readinfo/findreading',
  method:'post'
})

export const getReadDoneBook = ()=> request({
  url:'/readinfo/findAfterRead',
  method:'post'
})

export const getVipType = ()=> request({
  url:'/readinfo/findmemType',
  method:'post'
})

export const addVip = ({type,typeid,userid})=> request({
  url:'/readinfo/addmembers',
  method:'post',
  params:{
    timetype:type,
    typeid:typeid,
    userid:userid
  }
})

export const addReadHis = ({bookid,bookname,cover,intro,userid})=> request({
  url:'/readinfo/addBrowsing',
  method:'post',
  data:{
    bookid:bookid,
    bookname:bookname,
    cover:cover,
    introduction:intro,
    userid:userid
  }
})

export const getHomeBanner = ()=> request({
  url:'/readinfo/carousel',
  method:'get'
})

export const deleteHistory = ({bookid})=> request({
  url:'/readinfo/delBrowsing',
  method:'post',
  params:{
    bookid:bookid
  }
})

export const registerPhone = (phone,smsCode)=> request({
  url:'/readinfo/signUpSms',
  method:'get',
  params:{
    phone,
    smsCode
  }
})