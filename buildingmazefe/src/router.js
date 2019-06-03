import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewGame from './views/NewGame.vue'
import Rank from './views/Rank.vue'
import ModeChoice from './views/ModeChoice.vue'
import Build from './views/Build.vue'

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
      path: '/bm',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/choice',
      name: 'ModeChoice',
      component: ModeChoice
    },
    {
      path: '/build',
      name: 'Build',
      component: Build
    }
  ]
})
