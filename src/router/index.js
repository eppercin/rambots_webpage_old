import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/team',
      name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "about" */ '../views/TimelineView.vue')
    },
    {
        path: '/resources',
        name: 'resources',
        component: () => import(/* webpackChunkName: "about" */ '../views/ResourcesView.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
