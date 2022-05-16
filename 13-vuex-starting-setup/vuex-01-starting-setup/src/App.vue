<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <add-one></add-one>
    <add-twenty></add-twenty>
  </base-container>
</template>

<script>
import AddOne from './components/AddOne.vue';
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
    AddOne,
  },
  methods:{
    addOne()
    {
       this.$store.commit("increment");
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>