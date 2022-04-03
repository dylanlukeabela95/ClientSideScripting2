
<template>

  <div class="tasks">
  <div class="card" style="width: 24rem;">
    <div class="card-header">
        Tasks
    </div>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>

  <div class="pagination">
    <!--  adding Previous and Next Page links -->
    <router-link
      id="prev"
      :to="{ name: 'TasksList', query: { page: page - 1}}"
      v-if="page != 1"> &#60; Prev
    </router-link>

    <router-link
      id="next"
      :to="{ name: 'TasksList', query: { page: page + 1}}"
      v-if="hasNextPage"> Next &#62;
    </router-link>
  </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import TaskCard from '@/components/TaskCard.vue'
// import axios from 'axios'
import TasksService from '@/services/TasksService.js'
import { watchEffect } from 'vue'

export default {
  name: 'TasksList',
  props: ['page'],
  data () {
    return {
      tasks: null,
      totalTasks: 0
    }
  },

  created () {
    watchEffect(() => {
      // this.tasks = null
      // 2 tasks per page and receiving current page from prop above
      console.log('Page is ' + this.page)
      TasksService.getTasks(2, this.page)
        .then(response => {
          this.tasks = response.data
          this.totalTasks = response.headers['x-total-count']
        })
        .catch(error => {
          console.log('ERRRORS' + error)
        })
    })
  },
  computed: {
    hasNextPage () {
      //  Math.ceil - rounds up the value to the nearest larger number.
      //  divide by 2 since 2 tasks per page are being shown
      var totalPages = Math.ceil(this.totalTasks / 2)
      //  if this page is not the last page
      return this.page < totalPages
    }
  },

  components: {
    TaskCard
  }
}
</script>

<style scoped>

.card{
  margin:auto;
}

.pagination{
  display: flex;
  width: 382px;
}

.pagination a{
  flex: 1;
  text-decoration: none;
  color: black
}

#prev{
  text-align: left;
}

#next{
  text-align: right;
}
</style>
