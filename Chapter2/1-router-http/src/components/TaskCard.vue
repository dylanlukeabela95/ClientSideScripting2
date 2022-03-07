<template>
  <ul class="list-group list-group-flush">
    <router-link class="task-link" :to="{name: 'TaskDetails', params: {id: task.id}}">
      <li class="list-group-item"><b>{{task.title}}</b> on the {{task.date}} @ {{task.time}}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Task Card',
  props: {
    task: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .task-link{
    text-decoration: none;
  }

  .task-link:hover{
    border: 3px solid black;
  }

  .task-link:hover > .list-group-item
  {
    background-color: lightgray;
  }
</style>
