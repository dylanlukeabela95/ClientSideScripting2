import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import About from '../views/About.vue'
import TaskDetails from '../views/task/Details.vue'
import TaskEdit from '../views/task/Edit.vue'
import TaskDelete from '../views/task/Delete.vue'
import TaskLayout from '../views/task/Layout.vue'

/* eslint-disable*/
const routes = [{
        path: '/',
        name: 'TasksList',
        component: TasksList,
        //if page exists parse the string to an integer otherwise return 1
        props: route => ({ page: parseInt(route.query.page) || 1 })
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
        children: [

            {
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router