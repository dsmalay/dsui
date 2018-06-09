import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

import login from './components/DsLoginPage.vue';
import ewm from './components/ewmPage.vue';
import phone from './components/phonePage.vue';
import zhuti from './components/zhutiPage.vue';



const routes = [
  {path: '/login', component: login},
  {path: '/ewm', component: ewm},
  {path: '/phone', component: phone},
  {path: '/zhuti', component: zhuti},
]

export default new VueRouter({
  routes
})







