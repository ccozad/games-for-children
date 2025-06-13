import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
      }
    },
    {
      path: '/memory',
      name: 'memory',
      components: {
        default: () => import('../views/memory.vue')
      }
    }
  ],
})

export default router