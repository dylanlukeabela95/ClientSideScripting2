<template>
  <div v-if="task" class="task-details">
    <h1>{{ task.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'TaskDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'TaskEdit', params: { id } }">Edit</router-link>
      |
      <router-link :to="{ name: 'TaskDelete', params: { id } }"
        >Delete</router-link
      >
    </div>
    <transition name="fade" mode="out-in">
      <router-view :task="task"> </router-view>
    </transition>
  </div>
</template>

<script>
/* eslint-disable*/
import TaskServices from "../../services/TaskServices.js";
export default {
  props: ["id"],
  data() {
    return {
      task: null,
    };
  },

  created() {
    TaskServices.getTask(this.id)
      .then((response) => {
        this.task = response.data;
      })
      .catch((error) => {
        console.log("Errors - " + error);
      });
  },
};
</script>

<style>
.task-details {
  border: 2px solid black;
  width: 40%;
  margin: 15px auto;
  padding: 10px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

</style>