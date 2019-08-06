import axios from 'axios'
import { MessageBox } from 'element-ui'
import iData from '@/util/iData'

let request = axios.create({
  baseURL: $$C.host.http,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Authorization-User': `user_access_token ${iData.get('accessToken')}`,
    // 'access_token': 'bf159e5246ee431a97d65fc7a962b660',
    'access_token': `${iData.get('accessToken')}`,
  },
})

const defaultErrorHandler = error => Promise.reject(error)
const bypass = o => o

// function mockService(config) {
//   if (config.url.startsWith('/mock/')) {
//     config.baseURL = config.baseURL.replace('/api', '')
//   }
//   return config
// }

function tokenUnavailable(error) {
  const response = error.response
  if (response.status === 406) {
    iData.clear()
    MessageBox.alert('', '会话已过期', {
      type: 'warning'
    }).then(() => {
      location.reload()
    })
  }
  return Promise.reject(error)
}

function tokenUnavailable2(response) {
  if (response.data.errorCode === '2000') {
    iData.clear()
    MessageBox.alert('', '会话已过期, 请重新登陆', {
      type: 'warning'
    }).then(() => {
      location.reload()
    })
  } else {
    return response
  }
}

function customHttpError(response) {
  if(response.data.errorCode !== '0000') {
    return Promise.reject({
      response
    })
  } else {
    return response
  }
}

/* 全局请求中间件 */
// if (process.env.NODE_ENV === 'development') {
//   request.interceptors.request.use(mockService, defaultErrorHandler)
// }

/* 全局响应中间件 */
// request.interceptors.response.use(bypass, defaultErrorHandler)
// request.interceptors.response.use(bypass, tokenUnavailable)
request.interceptors.response.use(tokenUnavailable2, defaultErrorHandler)
request.interceptors.response.use(customHttpError, defaultErrorHandler)

export default {
  install(Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, { value: request })
  }
}
