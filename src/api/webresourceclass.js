import request from '@/utils/request'

export function getResourceClasslist() {
  return request({
    url: 'WebResourceClass/getResourceClasslist',
    method: 'get'
  })
}