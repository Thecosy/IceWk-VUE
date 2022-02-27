import request from '@/utils/request'

export function getAllArticle(query) {
  return request({
    url: 'WebArticle/getAllArticle/' + query.page + '/' + query.limit,
    method: 'get'
  })
}

export function getArticleById(id) {
  return request({
    url: 'WebArticle/getArticleById/' + id,
    method: 'get'
  })
}

export function getNewArticle(num) {
  return request({
    url: 'WebArticle/getNewArticle/' + num,
    method: 'get'
  })
}
export function getAllArticleNumber() {
  return request({
    url: 'WebArticle/getAllArticleNumber/',
    method: 'get'
  })
}


