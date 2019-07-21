import axios from '@/libs/api.request'

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: 'user/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'user/getUserByUserId',
    data: {
      user_id:token
    },
    headers:{
      "ticket":token
    },
    method: 'post'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
// 获取用户列表
export const getUserList = (data) => {
  return axios.request({
    url: 'user/pageByUser',
    data: data,
    headers:{
      "ticket":app.$store.state.user.userId
    },
    method: 'post'
  })
}
// 修改指定配置信息
export const updateAppointInfo = (key,value) => {
  return axios.request({
    url: 'dictionary/updateByKey',
    data: {key:key,value:value},
    headers:{
      "ticket":app.$store.state.user.userId
    },
    method: 'post'
  })
}
// 获取指定的配置信息
export const getAppointInfo = (key) => {
  return axios.request({
    url: 'dictionary/getByKey',
    data: {key:key},
    method: 'post',
    headers:{
      "ticket":app.$store.state.user.userId
    }
  })
}
// 获取所有的配置信息
export const getAllinfo = () => {
  return axios.request({
    url: 'dictionary/listByDictionary',
    data: {},
    method: 'post',
    headers:{
      "ticket":app.$store.state.user.userId
    }
  })
}
