import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

import login from './components/DsLoginPage.vue';
import EWM from './components/ewmPage.vue';
import PHONE from './components/phonePage.vue';
import ZHUTI from './components/zhutiPage.vue';

const routes = [
  {path: '/login', component: login},
  {path: '/ewm', component: EWM},
  {path: '/phone', component: PHONE},
  {path: '/zhuti', component: ZHUTI},
]

export default new VueRouter({
  routes
})





