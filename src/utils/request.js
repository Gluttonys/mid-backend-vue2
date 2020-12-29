import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})


service.interceptors.request.use(
  config => config,
  error => {
    console.error(error) // for debug
    return Promise.reject(error)
  }
)


service.interceptors.response.use(
  response => {
    const {data: res} = response
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

function request2Get(config) {
  return service({
    ...config,
    method: 'get'
  })
}


function request2Post(config) {
  return service({
    ...config,
    method: 'post'
  })
}

export {
  request2Get,
  request2Post
}
