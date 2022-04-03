/* eslint-disable*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TaskCard from './components/TaskCard.vue'

const app = createApp(App);

app.component("task-card", TaskCard);

app.use(store).use(router).mount('#app')