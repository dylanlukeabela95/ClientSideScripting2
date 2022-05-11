<template>
  <ul class="list-group list-group-flush">
    <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }">
      <li class="list-group-item hoverCheck">
        <b>{{ task.title }}</b> on the {{ task.date }} @ {{ task.time }}
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  /*eslint-disable*/
  props: {
    task: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  
}
ul {
  list-style-type: none;
  padding: 0;
  
}
li {
  display: inline-block;
  width: 100%;
}
a {
  color: black;
}

.hoverCheck:hover{
  background: lightcyan;
  box-shadow: 10px 10px 30px 10px rgba(114, 114, 114, 0.164);
}

li:hover{
  font-size: 20px;
}
</style>
