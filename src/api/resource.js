import request from '@/utils/request'

export function createResource(data) {
  return request({
    url: '/resource/create',
    method: 'post',
    data: data,
    dataType: 'json',
    crossDomain: true,
    processData: false,
    contentType: false,
  })
}

export function getAllResource(query) {
  return request({
    url: 'resource/getAllResource/' + query.page + '/' + query.limit,
    method: 'get'
  })
}

export function DelectResourceById(id) {
  return request({
    url: 'resource/DelectResourceById/' + id,
    method: 'get'
  })
}

export function getResourceById(id) {
  return request({
    url: 'resource/getResourceById/' + id,
    method: 'get'
  })
}