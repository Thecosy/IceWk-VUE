import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/User/login',
    method: 'get',
    params: data
  })
}
