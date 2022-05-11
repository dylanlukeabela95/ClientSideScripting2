<template>
  <div class="home">
    <div class="card table" style="width: 24rem">
      <div class="card-header">Tasks</div>
      <task-card class="taskCard"
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        ></task-card>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import TaskServices from "../services/TaskServices.js";

export default {
  data() {
    return {
      tasks: null,
    };
  },

  created() {
    TaskServices.getTasks()
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((error) => {
        console.log("ERROR - " + error);
      });
  },
};
</script>

<style>
.table {
  margin: auto;
}

.taskCard:hover
{
  /* border: 2px solid black; */
}
</style>
