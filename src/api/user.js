import request from '@/utils/request'

export function getAllUserName() {
  return request({
    url: '/UserRole/getAllUserName',
    method: 'get',
  })
}

export function getAllUserRole() {
  return request({
    url: '/UserRole/getAllUserRole',
    method: 'get',
  })
}