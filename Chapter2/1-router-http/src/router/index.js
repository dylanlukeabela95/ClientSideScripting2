import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import About from '../views/About.vue'

const routes = [
  {
      path: '/',
      name: 'TasksList',
      component: TasksList
  },
  {
      path: '/about',
      name: 'About',
      component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
