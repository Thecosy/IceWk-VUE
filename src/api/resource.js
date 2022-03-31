import request from '@/utils/request'

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