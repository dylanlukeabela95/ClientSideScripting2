<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <b>{{ task.title }}</b> on the {{ task.date }} @ {{ task.time }}
    </li>
  </ul>
</template>

<script>
export default {
  /*eslint-disable*/
  props:{
    task: Object,
  }
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
