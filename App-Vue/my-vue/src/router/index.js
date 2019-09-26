import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import discover from '@/components/discover/discover'
import mine from '@/components/mine/mine'
import shopCar from '@/components/shopCar/shopCar'
import detail from '@/components/detail/detail'
import find from '@/components/find/search'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/classify/:id',
      name: 'classify',
      component: classify
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/*',
      redirect:'/home'
    },
  ]
})
