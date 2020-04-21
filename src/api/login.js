import request from '@/utils/request'

export function login(username, password) {
  return request({
    // url: '/user/login',
    url: '/admin/sysuser/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    // url: '/user/info',
    url: '/admin/sysuser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // url: '/user/logout',
    url: '/admin/sysuser/logout',
    method: 'post'
  })
}
