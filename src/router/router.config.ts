import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    meta: {
      title: 'home',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginIndex.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/login/SignUp.vue')
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: () => import('../views/login/CreateAccount.vue')
  },
  {
    path: '/createWallet',
    name: 'createWallet',
    component: () => import('../views/login/CreateWallet.vue')
  },
  {
    path: '/linkSocialMedia',
    name: 'linkSocialMedia',
    component: () => import('../views/login/LinkSocialMedia.vue')
  },
  {
    path: '/influencerInfo',
    name: 'influencerInfo',
    component: () => import('../views/login/InfluencerInfo.vue')
  },
]
