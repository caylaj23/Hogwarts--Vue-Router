import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Curriculum from '@/views/Curriculum.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: Curriculum
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // {
  //   path: '/houses',
  //   name: 'houses',
  //   component: Houses
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
