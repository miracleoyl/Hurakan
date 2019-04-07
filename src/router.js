import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Home from '@/views/home.vue'
import LoginPage from '@/views/Login.vue'
import UserPage from '@/views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    }
  ]
})
