import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import LoginPage from '@/views/Login.vue'
import UserPage from '@/views/User.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Dashboard from "@/components/dashboard"

Vue.use(ElementUI, { locale })
Vue.use(Router)
Vue.use(ElementUI)

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
