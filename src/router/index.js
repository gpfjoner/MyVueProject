import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'

Vue.use(Router)
// demo

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    }
  ]
})
