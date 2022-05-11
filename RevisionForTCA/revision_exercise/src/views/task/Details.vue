<template>
  <div v-if="task" class="task-details">
    <p>{{ task.time }} on {{ task.date }} @ {{ task.time }}</p>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
/* eslint-disable*/

export default {
  props: ['task'],
}
</script>