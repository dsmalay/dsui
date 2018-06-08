import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/fonts-icon/iconfont.css'

Vue.use(Element)

new Vue({
  el: '#app',
  render: h => h(App)
})
