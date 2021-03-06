/*eslint-disable*/
import axios from 'axios';


const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/dylanlukeabela95/ClientSideScripting2",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {

    getTasks() {
        return apiClient.get('/tasks');
    },

    getTask(id) {
        return apiClient.get('/tasks/' + id);
    }
}