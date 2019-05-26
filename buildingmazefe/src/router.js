import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginPage from './views/LoginPage.vue'
import NewGame from './views/NewGame.vue'
//import Register from './views/Register.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/bm',
      name: 'NewGame',
      component: NewGame
    }
  ]
})
