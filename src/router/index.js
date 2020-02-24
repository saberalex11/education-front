import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

/** note: Submenu only appear when children.length>=1
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path:'/classes',
    component: Layout,
    redirect: '/classes/index',
    meta:{ title: 'classes', icon: 'table', noCache: true},
    children: [
      {
        path: 'index',
        component: () => import('@/views/classes/index'),
        name: 'Classes',
        meta: { title: 'classes', icon: 'table', noCache: true }
      }
      ]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/index',
    children: [
      {
        path: 'teacher',
        component: () => import('@/views/teacher/index'),
        name: 'Teacher',
        meta: { title: 'teacher', icon: 'list', noCache: true }
      }
    ]
  },
  {
    path: '/student',
    component: Layout,
    redirect: '/student/index',
    children: [
      {
        path: 'student',
        component: () => import('@/views/student/index'),
        name: 'Students',
        meta: { title: 'student', icon: 'list', noCache: true }
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/index',
    children: [
      {
        path: 'course',
        component: () => import('@/views/course/index'),
        name: 'Course',
        meta: { title: 'course', icon: 'list', noCache: true }
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [

]
