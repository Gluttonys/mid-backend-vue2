import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/plugins/element-ui'
import '@/plugins/particles'
import '@/plugins/vue-mavon-editor'

import '@/style/main.scss'  // 全局 css
import 'animate.css'        // 动画库 https://animate.style/
import '@/assets/fontawesome/css/font-awesome.min.css'

Vue.prototype.$lodash = require('lodash')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
