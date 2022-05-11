<template>
  <transition name="fade" mode="out-in">
    <div v-if="GStore.flashMessage != ''">
      {{ GStore.flashMessage }}
      <button class="btn btn-secondary" @click="closeMessage()">Close</button>
    </div>
  </transition>
  <div id="nav">
    <router-link to="/">Tasks</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/employee">Employees</router-link>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  /* eslint-disable*/
  inject: ["GStore"],
  methods: {
    closeMessage() {
      this.GStore.flashMessage = "";
    },
  },
};
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-from{
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-enter-active, .slide-fade-leave-active{
  transition: all 1s ease;
}

</style>
