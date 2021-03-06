import axios from 'axios'
import user from '../utils/user'
// import router from '../router'
import { baseUrl } from './baseUrl'
// create an axios instance
const service = axios.create({
  //   baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  baseURL: baseUrl,
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 60000, // request timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    const NEBULA_TOKEN = user.token()
    // Do something before request is sent
    if (NEBULA_TOKEN) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = NEBULA_TOKEN
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  // response => response.data,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (parseInt(res.code) === 43004 || parseInt(res.code) === 43005) {
      user.logOut()
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
