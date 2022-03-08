import request from '@/utils/request'

export function getCarousel(params) {
  return request({
    url: 'Sitting/getCarousel',
    method: 'get',
    params
  })
}
