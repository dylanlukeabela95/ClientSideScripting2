<template>
  <div class="home">
    <div class="card table" style="width: 24rem;">
      <div class="card-header">Tasks</div>
      <task-card v-for="task in tasks" :key="task.id" :task="task"></task-card>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  data() {
    return {
      // tasks: [
      //   {
      //     id: 1,
      //     title: "Task 1",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      //   {
      //     id: 2,
      //     title: "Task 2",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      //   {
      //     id: 3,
      //     title: "Task 3",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      //   {
      //     id: 4,
      //     title: "Task 4",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      //   {
      //     id: 5,
      //     title: "Task 5",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      //   {
      //     id: 6,
      //     title: "Task 6",
      //     description: "Description for task 1",
      //     location: "Valletta",
      //     date: "1st of Jan",
      //     time: "12:00",
      //   },
      // ],
    };
  },
};
</script>

<style>
.table {
  margin: auto;
}
</style>
