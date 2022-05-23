import theAxios from "axios"
const axios = theAxios.create({
  baseURL:'http://124.223.191.233:8090/',
  timeout:5000
})
export default ({url,method,params = {},data={},headers = {}})=> {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}