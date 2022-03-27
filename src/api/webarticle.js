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

export function Findarticles(title) {
  return request({
    url: 'WebArticle/findarticles/'+ title,
    method: 'get'
  })
}

export function FindarticlesByNum(title,num) {
  return request({
    url: 'WebArticle/findarticlesbynum/'+ title +"/" + num,
    method: 'get'
  })
}

export function FindAllArticle(query) {
  return request({
    url: 'WebArticle/FindAllArticle/'+query.content + '/' + query.page + '/' + query.limit,
    method: 'get'
  })
}

export function FindProfileByName(name) {
  return request({
    url: '/WebArticle/FindProfileByName/'+name,
    method: 'get'
  })
}
