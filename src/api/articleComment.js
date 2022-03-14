import request from '@/utils/request'

export function getallArticleComment(id) {
  return request({
    url: 'WebArticleClass/getallArticleComment/' + id,
    method: 'get',
  })
}

export function addArticleComment(data) {
  return request({
    url: 'WebArticleClass/addArticleComment',
    method: 'post',
    data: data,
    dataType: 'json',
    crossDomain: true,
    processData: false,
    contentType: false,
  })
}

export function getArticleCommentnum(id) {
  return request({
    url: 'WebArticleClass/getArticleCommentnum/' + id,
    method: 'get',
  })
}