import request from '@/utils/request'
// .use(config => {
//   const admin = JSON.parse(window.localStorage.getItem('access-admin'))
//    config.headers.Authorization = admin.data;
//    return config
//  })
export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data: data,
    dataType: 'json',
    crossDomain: true,
    processData: false,
    contentType: false
  })
}

export function updateArticle(id) {
  return request({
    url: '/article/ReviseArticleById/' + id,
    method: 'post',
    id
  })
}

export function getAllArticle(query) {
  return request({
    url: 'article/getAllArticle/' + query.page + '/' + query.limit,
    method: 'get'
  })
}

export function getArticleById(id) {
  return request({
    url: 'article/getArticleById/' + id,
    method: 'get'
  })
}

export function DelectArticleById(id) {
  return request({
    url: 'article/DelectArticleById/' + id,
    method: 'get'
  })
}
