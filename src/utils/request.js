import Axios from 'axios'
import qs from 'qs'
import { setGlobalLoading } from '../store/actions'
import store from '../store'

const baseURL = process.env.NODE_ENV === 'development' ? '/api' :
                process.env.NODE_ENV === 'production' ? 'http://zhiyunyilu.com' :
                process.env.NODE_ENV === 'test' ? 'http://192.168.88.170:9521' : '/other'

const option = {
  timeout: 20000,
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: (data, headers) => {
    if (headers['Content-Type'].search('application/json') !== -1) {
      return JSON.stringify(data)
    } else if (headers['Content-Type'].search('multipart/form-data') !== -1) {
      return data
    } else {
      return qs.stringify(data)
    }
  }
}

const axios = Axios.create(option)

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 发送请求前的操作
  store.dispatch(setGlobalLoading(true))
  config.headers.common['access-token'] = '002da1fb-b4d8-41bd-8df5-5f1978454ace'
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  store.dispatch(setGlobalLoading(false))
  // 错误拦截判断 具体看后端返回格式定义
  return {
    data: response.data.data,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText
  }
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
