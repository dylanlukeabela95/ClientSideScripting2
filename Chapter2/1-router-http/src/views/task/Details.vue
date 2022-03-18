<template>
  <div v-if="task" class="task-details">
    <p>{{ task.time }} on {{ task.date }} @ {{ task.location }}</p>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
/* eslint-disable*/
import TasksService from "../../services/TasksServices.js";
export default {
  props: ["task"],
}
</script>

<style scoped>
    .task-details{
        border: 1px solid black;
        width: 40%;
        margin: 15px auto;
        padding: 10px;
    }
</style>