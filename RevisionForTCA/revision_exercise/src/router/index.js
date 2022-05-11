/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import About from '../views/About.vue'
import TaskDetails from '../views/task/Details.vue'
import TaskEdit from '../views/task/Edit.vue'
import TaskDelete from '../views/task/Delete.vue'
import TaskLayout from '../views/task/Layout.vue'
import Employee from '../views/Employees.vue'

const routes = [{
        path: '/',
        name: 'TaskList',
        component: TaskList
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/tasks/:id',
        name: 'TaskLayout',
        props: true,
        component: TaskLayout,
        children: [{
                path: '',
                name: 'TaskDetails',
                component: TaskDetails
            },
            {
                path: 'edit',
                name: 'TaskEdit',
                component: TaskEdit
            },
            {
                path: 'delete',
                name: 'TaskDelete',
                component: TaskDelete
            }
        ]
    },
    {
        path: '/employee',
        name: 'Employee',
        component: Employee
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router