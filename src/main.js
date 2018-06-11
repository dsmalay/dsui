import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'

// import DsLogin from './components/DsLogin'
import router from './router.js'


Vue.use(Element)



new Vue({
  el: '#app',
   router,
  render: h => h(App),

})


