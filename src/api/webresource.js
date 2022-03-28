import request from '@/utils/request'

export function getAllResource(query) {
  return request({
    url: 'WebResource/getAllResource/' + query.page + '/' + query.limit,
    method: 'get'
  })
}

export function getAllResourceNumber() {
  return request({
    url: 'WebResource/getAllResourceNumber',
    method: 'get'
  })
}
