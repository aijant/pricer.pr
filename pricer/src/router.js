import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/newsDetail/:id',
      name: 'NewsDetail',
      component: () => import('@/views/NewsDetail')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/Services')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/Projects')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact')
    }
  ]
})

export default router
