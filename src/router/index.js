import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
        {
      path: '/episode',
      name: 'episode',
      component: () => import('../views/EpisodeView.vue')
    },
        {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationView.vue')
    }
  ]
})

export default router
