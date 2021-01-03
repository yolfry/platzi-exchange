import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import router from '@/router'

import axios from 'axios'
Vue.use(axios)

import { dollarFilter, percentFilter } from '@/filter'

import { VueSpinners } from '@saeris/vue-spinners'
Vue.use(VueSpinners)

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
