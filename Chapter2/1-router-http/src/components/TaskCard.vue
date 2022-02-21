<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>{{task.title}}</b> on the {{task.date}} @ {{task.time}}</li>
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

</style>
