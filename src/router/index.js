import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'
import store from '@/store'
// import Cookie from 'js-cookie'

Vue.use(VueRouter)

const subChild = [
  {
    path: 'profile',
    component: () => import('@/views/user/profile/profile'),
    name: 'profile',
    meta: {title: '个人中心'}
  },
  {
    path: 'dashboard',
    component: () => import('@/views/dashboard/dashboard'),
    name: 'dashboard',
    meta: {title: '仪表盘'}
  },
  {
    path: 'user-list',
    name: 'user-list',
    component: () => import('@/views/user-list'),
    meta: {title: '用户列表', superior: '作者/用户'}
  },
  {
    path: '/error-404',
    name: 'error404',
    component: () => import('@/views/errorPage/errPage44'),
    meta: {title: 'error404', superior: '错误页面'}
  },
  {
    path: '/error-500',
    name: 'error500',
    component: () => import('@/views/errorPage/errPage45'),
    meta: {title: 'error500', superior: '错误页面'}
  }
]

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: subChild
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login/login'),
    meta: {title: 'login'}
  },
  {
    // 会匹配所有路径, 跳到 404
    // 该路由应该放到路由表的最后一项， 作为最后跳转项
    path: '*',
    component: () => import('@/views/errorPage/errPage44'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
  store.commit('tags/toAddTagList', [to.meta.title, to.name])  /* 二维数组保存tag + 路由 */
  store.commit('tags/toSetCurrentTag', to.meta.title)                 /* 设置当前标签 */
  next()
})

router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
  next()
})


export default router
