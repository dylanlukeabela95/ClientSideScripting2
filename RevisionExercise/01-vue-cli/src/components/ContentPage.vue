<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <label class="navbar-brand" href="#">Cart ({{ itemValue }})</label>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="nav-link active" aria-current="page" href="#"
          >Remove Products</a
        >
      </div>
    </div>
  </nav>
  <table>
    <thead>
      <tr>
        <h1>{{ variants[hoverValue].occupation }} {{variants[hoverValue].item}}</h1>
      </tr>
      <tr>
        <h5>{{ variants[hoverValue].subTitle }}</h5>
      </tr>
      <tr v-if="hoverValue == 2">
        <img :src="variants[hoverValue].image" style="height: 400px" />
      </tr>
      <tr v-else>
        <img :src="variants[hoverValue].image" />
      </tr>
      <tr>
        <button
          type="button"
          class="btn btn-primary"
          @click="addItem"
          :class="{ disabledButton: !inStock }"
        >
          Add To Cart
        </button>
      </tr>
    </thead>
  </table>

  <ul>
    <li @mouseover="showWhite">
      <span
        id="whiteCircle"
        :style="{ backgroundColor: variants[0].color }"
      ></span>
    </li>
    <li @mouseover="showGreen">
      <span
        id="greenCircle"
        :style="{ backgroundColor: variants[1].color }"
      ></span>
    </li>
    <li @mouseover="showRed">
      <span
        id="redCircle"
        :style="{ backgroundColor: variants[2].color }"
      ></span>
    </li>
    <li>
      <br />
      <span
        v-if="variants[hoverValue].quantity > 8"
        style="color: green"
        v-bind="(inStock = true)"
        ><strong>In Stock</strong></span
      >
      <span
        v-else-if="
          variants[hoverValue].quantity <= 8 &&
          variants[hoverValue].quantity > 0
        "
        style="color: blue"
        v-bind="(inStock = true)"
        ><strong>Almost Sold Out</strong></span
      >
      <span v-else style="color: red" v-bind="(inStock = false)"
        ><strong>Out of Stock</strong></span
      >
    </li>
    <li>
      <br />
      <span id="FreeShippingText">Shipping: Free</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
      item:{
          type:String,
      },
      occupation:{
          type:String,
      },
      image:{
          type:String,
      },
      quantity:{
          type:Number,
      }
  },
  data() {
    return {
      variants: [
        {
          id: 1,
          color: "white",
          item: "Mug",
          occupation: "Coffee",
          subTitle: "Price: $30.00",
          image: require("G:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/public/images/mug.jpg"),
          quantity: 20,
        },
        {
          id: 2,
          color: "green",
          item: "Shoes",
          occupation: "Football",
          subTitle: "Price: $60.00",
          image: require("G:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/public/images/shoes.jpg"),
          quantity: 8,
        },
        {
          id: 3,
          color: "red",
          item: "Bag",
          occupation: "School",
          subTitle: "Price: $40.00",
          image: require("G:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/public/images/schoolbag.jpg"),
          quantity: 0,
        },
      ],

      itemValue: 0,
      hoverValue: 0,
      inStock: true,
    };
  },

  methods: {
    addItem() {
      if (this.inStock) {
        this.itemValue++;
      }
    },

    showWhite() {
      this.hoverValue = 0;
    },

    showGreen() {
      this.hoverValue = 1;
    },

    showRed() {
      this.hoverValue = 2;
    },
  },
};
</script>

<style>
.container-fluid {
  background: linear-gradient(
    90deg,
    rgba(0, 255, 128, 0.8),
    rgba(131, 250, 131, 0.8)
  );
}

table {
  margin-top: 50px;
  margin-left: 230px;
  float: left;
}

img {
  margin-top: 50px;
  width: 400px;
  height: 250px;
  border: 1px solid black;
}

button {
  margin-top: 20px;
}

ul {
  float: left;
  list-style: none;
  margin-top: 225px;
  width: 25%;
}

#greenCircle,
#redCircle,
#whiteCircle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid black;
}

.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

.disabledButton:hover {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

.disabledButton:focus {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>

