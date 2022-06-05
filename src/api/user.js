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

export function GetUserInfoByid(id) {
  return request({
    url: '/User/GetUserInfoByid/'+ id,
    method: 'get',
  })
}

export function ChangeUser(jwt,form) {
  return request({
    url: '/User/ChangeUser/'+ jwt,
    method: 'post',
    data: form
  })
}

export function CreateVip(id,integral) {
  return request({
    url: '/User/CreateVip/'+ id +'/' + integral,
    method: 'get',
  })
}

export function UpdateIntegral(id,integral,order) {
  return request({
    url: '/User/UpdateIntegral/'+ id  +'/' + integral +'/' + order,
    method: 'get',
  })
}
