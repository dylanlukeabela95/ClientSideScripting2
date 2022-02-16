<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <label class="navbar-branC:\GitHub\Year2Sem2\ClientSideScripting2\RevisionExercise\01-vue-cli\images\shoes.jpgd" href="#">Cart ({{ cart.length }})</label>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="nav-link active" aria-current="page" href="#" @click="removeProducts">Remove Products</a>
      </div>
    </div>
  </nav>
  <content-page
  :primeMember="primeMember"
  @update-cart="updateCartValue"></content-page>
</template>

<script>
export default {
  // props:{
  //   primeMember:{
  //     type: Boolean,
  //     default: true,
  //   }
  // },

  data(){
    return{
            cart:[],
            primeMember: true,
            itemValue: 0,
    }
  },
  methods:{
    updateCartValue(newId){
      this.cart[this.itemValue] = newId;
      this.itemValue++;
    },

    removeProducts()
    {
      this.itemValue = 0;
      this.cart = [];
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
