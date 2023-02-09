import axios from "axios";
import Cookie from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://120.24.64.5:8088/mall-admin',
  timeout: 15000
})

// 拦截器
instance.interceptors.request.use(config => {
  let token = Cookie.get('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = token
    // config.headers = {
    //   Authorization: token
    // }
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(result => {
  return result.data
}, err => {
  return Promise.reject(err)
})

export default instance