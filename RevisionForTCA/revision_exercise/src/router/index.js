import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import About from '../views/About.vue'

/* eslint-disable*/
const routes = [{

        path: '/',
        name: 'TaskList',
        component: TaskList
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