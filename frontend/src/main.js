import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'


import router from './config/router'

Vue.config.productionTip = false

//  Temporário

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IldpbGxpYW4gUy4gUGVyZWlyYSIsImVtYWlsIjoid3NyZXNpbGllbnR0YXN0ZXNob3B3QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2Njk1ODI1ODksImV4cCI6MTY2OTg0MTc4OX0.k7V46jfwtdJR3lVhvnAdI-So9cMaP6D3gZT63btFjew'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')