<template>
  <p>Edit Task</p>
</template>

<script>
/* eslint-disable*/
import TasksService from "../../services/TasksServices.js";
export default {
  props: ["task"],
};
</script>

<style scoped>
    .task-details{
        border: 1px solid black;
        width: 40%;
        margin: 15px auto;
        padding: 10px;
    }
</style>