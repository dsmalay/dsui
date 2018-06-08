import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/fonts-icon/iconfont.css'

import DsLogin from './components/DsLogin'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.use(Element)


const router = new VueRouter({
  routes:[
    {path:'/login',component:DsLogin}
  ]
})



new Vue({
  el: '#app',
   router,
  render: h => h(App),
 
})
