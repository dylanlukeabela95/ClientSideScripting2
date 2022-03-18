import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TaskCard from './components/TaskCard.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//creating a global (reactive) object to share across multiple components
const GStore = reactive({ flashMessage: '' })

const app = createApp(App);

app.component("task-card", TaskCard);

app
    .use(store)
    .use(router)
    //make object available for components in our app to use (INJECT)
    //          KEY  , VALUE
    .provide('GStore', GStore)
    .mount('#app')