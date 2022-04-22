// axios 发送ajax请求
import request from '@/utils/request'

export default{

  //Native下单
  nativePay(productId) {
    return request({
      url: '/Pay-api/wx-pay/test-native/' + productId,
      method: 'post'
    })
  },

  //Native下单(临时)
  nativePayTemp(resourceId) {
    return request({
      url: '/Pay-api/wx-pay/temp-native/' + resourceId,
      method: 'post'
    })
  },

  cancel(orderNo) {
    return request({
      url: '/Pay-api/wx-pay/cancel/' + orderNo,
      method: 'post'
    })
  },

  refunds(orderNo, reason) {
    return request({
      url: '/Pay-api/wx-pay/refunds/' + orderNo + '/' + reason,
      method: 'post'
    })
  }
}
