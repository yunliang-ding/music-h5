import axios from 'axios'
const qs = require('qs')
const get = async (url, params) => {
  let response = null
  let options = {
    params,
    timeout: 30000,
    validateStatus: (status) => { // 控制允许接受的状态码范围
      return status >= 200 && status < 505
    }
  }
  try {
    response = await axios.get(url, options)
    return response.data
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
const post = async (url, data, headers) => {
  data = data || {}
  let response = null
  try {
    response = await axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    })
    return response.data
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
export {
  get,
  post
}