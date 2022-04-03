<template>
  <div>
    <transition name="fade">
      <div v-if="GStore.flashMessage != ''">
        {{ GStore.flashMessage }}
         <button @click="GStore.flashMessage = ''" class="btn btn-secondary">Close</button>
      </div>
    </transition>
    <!-- Display flash message if it is not blank -->
    <div id="nav">
      <router-link to="/">Tasks</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/employee">Employees</router-link>
    </div>
    
    <router-view  v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

  </div>
</template>

<script>
/* eslint-disable*/
export default {
  inject: ['GStore'],
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

@keyframes bluefade {
  from {
    background: lightblue;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: bluefade;
  animation-duration: 3s;
}

.fade-enter-from, .fade-leave-to{
  opacity:0;
}

.fade-enter-active, .fade-leave-active{
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

.slide-up-enter-from {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 1s ease;
}
</style>
