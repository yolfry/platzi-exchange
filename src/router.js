import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Error404 from '@/views/Error404'

import CoinDetail from '@/views/CoinDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: Error404
  },
  {
    path: '/coin/:id',
    name: 'coin-detail',
    component: CoinDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
