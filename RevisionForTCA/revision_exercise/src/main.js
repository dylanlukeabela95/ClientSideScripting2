/* eslint-disable*/

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TaskCard from './components/TaskCard.vue'

const GStore = reactive({ flashMessage: '' })

const app = createApp(App);

app.component("task-card", TaskCard);

app
    .use(store)
    .use(router)
    .provide('GStore', GStore)
    .mount('#app')