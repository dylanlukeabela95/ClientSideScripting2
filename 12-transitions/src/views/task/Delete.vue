<template>
  <div>
    <button @click="deleteTask" class="btn btn-danger">Delete Task</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
  // make GStore object available inside this component
  inject: ['GStore'],
  methods: {
    deleteTask () {
      // After deletion is successful the push method will redirect user
      console.log('Task deleted')
      // flash message code goes here
      this.GStore.flashMessage = 'Task ' + this.task.title + ' was deleted'
      // reset flash message after 3 seconds - remove if using a modal
      /* setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000) */
      this.$router.push({
        name: 'TasksList'
        // params: { id: this.task.id }
        // the above line of code is optional. id will get populated by default
      })
    }
  }
}
</script>
