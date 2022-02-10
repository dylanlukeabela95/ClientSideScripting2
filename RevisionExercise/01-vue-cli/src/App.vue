<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <label class="navbar-brand" href="#">Cart ({{ itemValue }})</label>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="nav-link active" aria-current="page" href="#" @click="removeProducts">Remove Products</a>
      </div>
    </div>
  </nav>
  <content-page
  @update-cart="updateCartValue"></content-page>
</template>

<script>
export default {
  props:{
    primeMember:{
      type: Boolean,
      default: true,
    }
  },

  data(){
    return{
            itemValue: 0,
    }
  },
  methods:{
    updateCartValue(newItemValue){
      this.itemValue = newItemValue;
    },

    removeProducts()
    {
      this.itemValue = 0;
    },
  }
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
</style>
