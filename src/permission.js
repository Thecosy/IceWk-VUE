import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { checkToken } from '@/api/checkToken'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/404', '/']  no redirect whitelist

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    console.log('need 登陆')
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (to.path.startsWith('/login')) {
      window.localStorage.removeItem('access-admin')
      next()
    } else {
      const admin = JSON.parse(window.localStorage.getItem('access-admin'))
      console.log(admin)
      if (!admin) {
        next({ path: '/login' })
      } else {
        console.log('检验token合法')
        const admin = JSON.parse(window.localStorage.getItem('access-admin'))
        console.log(admin)
        // 检验token合法性
        checkToken(admin.data).then(respose => {
          console.log(respose)
          if (respose.data !== true) {
            console.log('检验失')
            next({ path: '/error' })
          }
        })
        next()
      }
    }

    // if (to.matched.length === 0) {
    //   next({name: '404'}) // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
    // }
  } else {
    next() // 主页面通过的路口
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
