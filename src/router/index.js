import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/page/Home'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/error',
    component: () => import('@/views/LongOutErr'),
    hidden: true
  },

  // my self page out
  {
    path: '/home',
    component: () => import('@/page/Home'),
    hidden: true
  },
  {
    path: '/list',
    component: () => import('@/page/List'),
    hidden: true
  },
  {
    path: '/post/:id(\\d+)',
    component: () => import('@/page/Post'),
    hidden: true
  },
  {
    path: '/post/all',
    component: () => import('@/page/AllPost'),
    hidden: true
  },
  {
    path: '/class',
    component: () => import('@/page/Class'),
    hidden: true
  },
  {
    path: '/planet',
    component: () => import('@/page/Planet'),
    hidden: true
  },
  {
    path: '/post/:content/all',
    component: () => import('@/page/SearchPost'),
    hidden: true
  },
  {
    path: '/about',
    component: () => import('@/page/About'),
    hidden: true
  },

  // admin page home
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', requireAuth: true }
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    }]
  },
  {
    path: '/swagger',
    component: Layout,
    redirect: '/admin/swagger',
    children: [{
      path: 'swagger',
      name: 'swagger',
      component: () => import('@/views/develop/swagger'),
      meta: { title: 'swagger', icon: 'dashboard', requireAuth: true }
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    }]
  },

  // admin page （my）
  {
    path: '/article',
    component: Layout,
    redirect: '/article/AllArticle',
    name: 'article',
    meta: {
      title: '文章',
      icon: 'article',
      requireAuth: true
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    },
    children: [
      {
        path: 'NewArticle',
        component: () => import('@/admin/NewArticle'),
        name: 'NewArticle',
        meta: { title: '创建文章', icon: 'edit', requireAuth: true, noCache: false }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/AllArticle',
    name: 'article',
    meta: {
      title: '内容管理',
      icon: 'list',
      requireAuth: true
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    },
    children: [
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/admin/ArticleEdit'),
        name: 'EditArticle',
        meta: { title: '编辑文章', noCache: true, activeMenu: '/article/list', requireAuth: true },
        // 需要登录才能进入的页面可以增加一个requireAuth属性
        hidden: true
      },
      {
        path: 'AllArticle',
        component: () => import('@/admin/ArticleList'),
        name: 'AllArticle',
        meta: { title: '文章列表', icon: 'documentation', requireAuth: true }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      },
      {
        path: 'dropzone',
        component: () => import('@/admin/Dropzone'),
        name: 'DropzoneDemo',
        meta: { title: '图片上传', icon: 'el-icon-upload', requireAuth: true }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      },
      {
        path: 'ArticleComment',
        component: () => import('@/admin/ArticleComment'),
        name: 'ArticleComment',
        meta: { title: '评论管理', icon: 'message', requireAuth: true }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      },
      {
        path: 'ArticleClass',
        component: () => import('@/admin/ArticleClass'),
        name: 'ArticleClass',
        meta: { title: '分类管理', icon: 'el-icon-receiving', requireAuth: true }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      }
    ]
  },
  {
    path: '/selfInfo',
    component: Layout,
    redirect: '/Manage/selfInfo',
    name: 'selfInfo',
    meta: {
      title: '用户管理',
      icon: 'user',
      requireAuth: true
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    },
    children: [
      {
        path: 'avatar-upload',
        component: () => import('@/admin/avatar-upload'),
        name: '管理员信息',
        meta: { title: '管理员信息' }
      },
      {
        path: 'RoleEdit',
        component: () => import('@/admin/RoleEdit'),
        name: '角色管理',
        meta: { title: '角色管理' }
      },
      {
        path: 'avatar-upload',
        component: () => import('@/admin/avatar-upload'),
        name: 'AvatarUploadDemo',
        meta: { title: 'Upload' }
      }
    ]
  },
  {
    path: '/StoreManage',
    component: Layout,
    redirect: '/Manage/StoreManage',
    name: 'selfInfo',
    meta: {
      title: '商城管理',
      icon: 'shopping',
      requireAuth: true
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    },
    children: [
      {
        path: 'avatar-upload',
        component: () => import('@/admin/avatar-upload'),
        name: '商城总览',
        meta: { title: '商城总览' }
      },
      {
        path: 'avatar-upload',
        component: () => import('@/admin/avatar-upload'),
        name: '会员管理',
        meta: { title: '会员管理' }
      },
      {
        path: 'PayMent',
        component: () => import('@/admin/PayMent'),
        name: '支付测试',
        meta: { title: '支付测试' }
      }
    ]
  },
  {
    path: '/sitting',
    component: Layout,
    redirect: '/article/AllArticle',
    name: 'sitting',
    meta: {
      title: '设置',
      icon: 'el-icon-s-tools',
      requireAuth: true
      // 需要登录才能进入的页面可以增加一个requireAuth属性
    },
    children: [
      {
        path: 'Webset',
        component: () => import('@/admin/WebSet'),
        name: '网站信息',
        meta: { title: '网站信息' }
      },
      {
        path: 'avatar-upload',
        component: () => import('@/admin/avatar-upload'),
        name: '友情链接',
        meta: { title: '友情链接' }
      }
    ]
  },

  // admin page

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link', requireAuth: true }
        // 需要登录才能进入的页面可以增加一个requireAuth属性
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history',
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
