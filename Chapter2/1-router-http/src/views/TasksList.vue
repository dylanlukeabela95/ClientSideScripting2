<template>
  <div class="card" style="width: 24rem; margin-left: 37%;">
      <div class="card-header">Tasks</div>
      <task-card v-for="task in tasks" :key="task.id" :task="task"></task-card>
  </div>
</template>

<script>
/* eslint-disable*/
import TaskCard from '../components/TaskCard.vue'
import TasksServices from '../services/TasksServices.js'
import axios from 'axios'

export default {
  components: { TaskCard },
  created () {
    TasksServices.getTasks()
    .then(response => {
      this.tasks = response.data
    })
    .catch(error => {
      console.log("ERRORS" + error)
    })
  },
  data () {
    return {
      tasks: null
      // [
      //   {
      //     id: 1,
      //     title: 'Task 1',
      //     description: 'Description for task 1',
      //     location: 'Valletta',
      //     date: '1st of Jan',
      //     time: '12.00'
      //   },
      //   {
      //     id: 2,
      //     title: 'Task 2',
      //     description: 'Description for task 2',
      //     location: 'Valletta',
      //     date: '1st of Jan',
      //     time: '12.00'
      //   },
      //   {
      //     id: 3,
      //     title: 'Task 3',
      //     description: 'Description for task 3',
      //     location: 'Valletta',
      //     date: '1st of Jan',
      //     time: '12.00'
      //   }
      // ]
    }
  }
}
</script>
