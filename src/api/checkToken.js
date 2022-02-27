import request from '@/utils/request'

export function checkToken(data) {
  return request({
    url: '/checkToken',
    method: 'get',
    headers: {
      token: data
    }
  })
}
