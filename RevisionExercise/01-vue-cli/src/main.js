import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import ContentPage from './components/ContentPage.vue'

const app = createApp(App);
app.component("content-page", ContentPage);

app.mount('#app')