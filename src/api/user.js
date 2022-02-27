import request from '@/utils/request'

export function getAllUserName(data) {
  return request({
    url: '/getAllUserName',
    method: 'get',
    data
  })
}
