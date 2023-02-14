/**
 * @description [ axios 请求封装]
 */
import store from '@/store'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// import { Message, Modal } from 'view-design' // UI组件库
import { Dialog, Toast } from 'vant'
import router from '@/router'
// 根据环境不同引入不同api地址
import { config } from '@/config'

const token = localStorage.getItem('accessToken')

const service = axios.create({
  baseURL: config.baseApi, // url = base url + request url
  timeout: 5000,
  withCredentials: false // send cookies when cross-domain requests
  // headers: {
  // 	// clear cors
  // 	'Cache-Control': 'no-cache',
  // 	Pragma: 'no-cache'
  // }
})

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    // 加载动画
    if (config.loading) {
      Toast.loading({
        message: 'Loading...',
        forbidClick: true
      })
    }
    // 在此处添加请求头等，如添加 token
    if (token) {
    config.headers['X-Access-Token'] = `${token}`
    }
    return config
  },
  (error: any) => {
    console.log(error);
    Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use((response: AxiosResponse) => {
  // 正常返回数据
  if (response.status === 200) {
    const res = response.data
    if (res.code === 200) {
      return res.result
    } else if (res.code === 500) {
      Toast.fail(res.message)
      return Promise.reject(res)
    } else {
      Toast.fail(res.message)
      return Promise.reject(res)
    }
  }
}, error => {
  if (error.toString() === 'Cancel') {
    return Promise.reject(error)
  }
  // 对响应错误做点什么
  if (window.navigator.onLine === false) {
    Toast.fail(('network error'))
    return Promise.reject(error)
  }
  switch (error.response && error.response.status) {
    case 401:
      localStorage.removeItem('accessToken')
      localStorage.removeItem('hadAuth')
      localStorage.removeItem('SysUserinfo')
      Toast.fail(error.response.data.message)
      router.push('/login')
      break
    default:
      Toast.fail(('The request failed'))
      break
  }
  return Promise.reject(error)
})

export default service


