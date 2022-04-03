<template>
  <div class="card" style="width: 26.5%; margin: auto">
    <h3>
      <strong>You are on page {{ page }}</strong>
    </h3>
    <div class="card-header">Tasks</div>

    <task-card v-for="task in tasks" :key="task.id" :task="task"></task-card>

    <div class="pagination">
      <router-link
          id="prev"
          :to="{ name: 'TasksList', query: { page: page - 1 } }"
          v-if="page != 1"
        >
          &#60; Prev
        </router-link>

      <router-link
          id="next"
          :to="{ name: 'TasksList', query: { page: page + 1 } }"
          v-if="hasNextPage"
        >
          Next &#62;
        </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import TaskCard from "../components/TaskCard.vue";
import TasksServices from "../services/TasksServices.js";
import axios from "axios";
import { watchEffect } from "@vue/runtime-core";

export default {
  name: "TasksList",
  props: ["page"],
  components: { TaskCard },
  created() {
    /*TasksServices.getTasks()
    .then(response => {
      this.tasks = response.data
    })
    .catch(error => {
      console.log("ERRORS" + error)
    })*/
    watchEffect(() => {
      //2 tasks per page and receiving current page from prop above
      console.log("Page is " + this.page);
      TasksServices.getTasks(2, this.page)
        .then((response) => {
          this.tasks = response.data;
          this.totalTasks = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log("Errors " + error);
        });
    });
  },
  computed: {
    hasNextPage() {
      //Math.ceil - rounds up the value to the nearest larger number
      //divide by 2 since 2 tasks per page are being shown
      var totalPages = Math.ceil(this.totalTasks / 2);

      //if this page is not the last page
      return this.page < totalPages;
    },
  },
  data() {
    return {
      tasks: null,
      totalTasks: 0,
    };
  },
};
</script>

<style>
h3 {
  padding: 10px;
}

.pagination {
  display: flex;
  width: 99%;
  margin-left: 1%;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: black;
}

#prev {
  text-align: left;
}

#next {
  text-align: right;
}

.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease;
}
</style>
