import request from '@/utils/request'

export function getAllUserName(data) {
  return request({
    url: '/User/getAllUserName',
    method: 'get',
    data
  })
}
