import request from '@/utils/request'

export function updateImage(form) {
  return request({
    url: '/Api/updateimage',
    method: 'post',
    data: form,
    dataType: 'json',
    processData: false,
    contentType: false,
    timeout: 60000
  })
}
