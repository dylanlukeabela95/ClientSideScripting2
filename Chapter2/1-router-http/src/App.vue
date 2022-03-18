<template>
  <div>
    <!-- Display flash message if it is not blank -->
    <div id="flashMessage" v-if="GStore.flashMessge != ''">
      {{GStore.flashMessge}}
    </div>
    <div id="nav">
      <router-link to="/">Tasks</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ['GStore']
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes bluefade{
  from{
    background: lightblue;
  }

  to{
    background: transparent;
  }
}

#flashMessage{
  animation-name: bluefade;
  animation-duration: 3s;
}

</style>
