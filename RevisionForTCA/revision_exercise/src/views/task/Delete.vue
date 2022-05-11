<template>
  <!-- eslint-disable -->
  <div>
    <button class="btn btn-danger" @click="deleteTask">Delete Task</button>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  props: ["task"],
  inject: ["GStore"],
  methods: {
    deleteTask() {
      this.GStore.flashMessage = 'Task '+this.task.title + ' was deleted';
      
      this.$router.push({
        name: "TaskDetails",
        //params: {id: this.task.id}
        //the above line of code is optional/ Id will get populated by default
      });
    },
  },
};
</script>