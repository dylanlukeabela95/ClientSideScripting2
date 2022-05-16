import { createApp } from 'vue';
import { createStore } from 'vuex';
import CounterVue from './components/TheCounter.vue';
import AddTwenty from './components/AddTwenty.vue';
import AddOne from './components/AddOne.vue';

import App from './App.vue';

const store = createStore({
    state(){
        return{
            counter:0
        }
    }, 
    mutations:{
        increment(state)
        {
            state.counter++;
        },

        increase(state,value)
        {
            state.counter += value;
        }
    }, 
    getters:{
        finalCounter(state)
        {
            return state.counter
        }
    }
})

const app = createApp(App);
app.component("the-counter",CounterVue);
app.component("add-twenty", AddTwenty);
app.component("add-one", AddOne);
app.use(store);
app.mount('#app');
