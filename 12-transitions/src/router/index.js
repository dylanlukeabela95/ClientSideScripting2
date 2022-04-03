import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '@/views/TasksList.vue'
import TaskDetails from '@/views/task/Details.vue'
import TaskDelete from '@/views/task/Delete.vue'
import TaskEdit from '@/views/task/Edit.vue'
import TaskLayout from '@/views/task/Layout.vue'
import About from '@/views/About.vue'
import Employees from '@/views/Employees.vue'
import NotFoundComponent from '@/views/NotFoundComponent.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList,
    //  if page exists parse the string to an integer otherwise return 1
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/tasks/:id',
    name: 'TaskLayout',
    props: true,
    component: TaskLayout,
    children: [
      { // nest child components
        path: '', // this will be loaded at the root path of the parent
        name: 'TaskDetails',
        component: TaskDetails
      },
      {
        path: 'edit', // this will be added to the parent path
        name: 'TaskEdit',
        component: TaskEdit
      },
      {
        path: 'delete', // this will be added to the parent path
        name: 'TaskDelete',
        component: TaskDelete
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
