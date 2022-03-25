<template>
  <!-- <button
    data-toggle="modal"
    data-target="#myModal"
    class="btn btn-danger"
    @click="deleteTask"
  >
    Delete Task
  </button> -->

  <button class="btn btn-danger" @click="deleteTask">Delete Task</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-body">
          <p>Task {{taskText}} was deleted</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="afterModal"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import TasksService from "../../services/TasksServices.js";
export default {
  props: ["task"],
  //make GStore object available inside this component
  inject: ['GStore'],
  data(){
      return{
          taskText: ""
      }
  },
  methods:{
      deleteTask(){
          //After deletion is successful the push method will redirect user
          console.log("Task Deleted")
          this.taskText = this.task.title;
          //flash message code goes here
          this.GStore.flashMessage = "Task "+ this.task.title + ' was deleted'
          //reset flash message after 3 seconds
          // setTimeout(() => {
          //     this.GStore.flashMessge = ''
          // }, 3000)
          this.$router.push({
              name:'TaskDetails'
              //params: {id: this.task.id}
              //the above line of code is optional/ Id will get populated by default
          })
      },
      afterModal(){
          this.$router.push({
              name: 'TaskDetails'
          });
      }
  }
};

</script>

<style scoped>
.task-details {
  border: 1px solid black;
  width: 40%;
  margin: 15px auto;
  padding: 10px;
}
</style>