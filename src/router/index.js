import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
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
    path: '/contact-me',
    name: 'contact-me',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/TestimonialsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/education&experience',
    name: 'education&experience',
    component: () => import('../views/ResumeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
