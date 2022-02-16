<template>
  <table>
    <thead>
      <tr>
        <h1>
          {{title}}
        </h1>
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
          :class="{ disabledButton: !checkStock() }"
          :disabled="!checkStock()"
        >
          Add To Cart
        </button>
      </tr>
    </thead>
  </table>

  <ul>
    <li v-for="(variant, index) in variants"
    :key="variant.id"
    @mouseover="updateVariant(index)"
    class="color-circle"
    :style="{backgroundColor:variant.color}">

    </li>
    <!-- <li @mouseover="showWhite">
      <span
        id="whiteCircle"
        :style="{ backgroundColor: variants[0].color }"
      ></span>
    </li> -->
    <!-- <li @mouseover="showGreen">
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
    </li> -->
    <li>
      <br />
      <span
        v-if="inStock() >= 10"
        style="color: green"
        
        ><strong>In Stock</strong></span
      >
      <span
        v-else-if="
          inStock() < 10 &&
          inStock() > 0
        "
        style="color: blue"
        
        ><strong>Almost Sold Out</strong></span
      >
      <span v-else style="color: red" 
        ><strong>Out of Stock</strong></span
      >
    </li>
    <li>
      <br />
      <span v-if="primeMember">Shipping: Free</span>
      <span v-else>Shipping: $2.99</span>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["update-cart"],
  props: {
    item: {
      type: String,
    },
    occupation: {
      type: String,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    primeMember:{
      type: Boolean,
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
          image: require("C:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/images/mug.jpg"),
          quantity: 20,
        },
        {
          id: 2,
          color: "green",
          item: "Shoes",
          occupation: "Football",
          subTitle: "Price: $60.00",
          image: require("C:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/images/shoes.jpg"),
          quantity: 8,
        },
        {
          id: 3,
          color: "red",
          item: "Bag",
          occupation: "School",
          subTitle: "Price: $40.00",
          image: require("C:/GitHub/Year2Sem2/ClientSideScripting2/RevisionExercise/01-vue-cli/images/schoolbag.jpg"),
          quantity: 0,
        },
      ],
      itemValue: 0,
      hoverValue: 0,
      // inStock: true,
      // primeMember: true,
    };
  },
  computed:{
    title(){
      return this.variants[this.hoverValue].occupation + " " + this.variants[this.hoverValue].item;
    }
  },
  methods: {
    addItem() {
      if (this.inStock) {
        
        this.$emit("update-cart", this.id);
      }
    },

    updateVariant(index){
      this.hoverValue = index;
    },

    inStock()
    {
      return this.variants[this.hoverValue].quantity;
    },

    checkStock()
    {
      if(this.inStock() > 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    // showWhite() {
    //   this.hoverValue = 0;
    // },

    // showGreen() {
    //   this.hoverValue = 1;
    // },

    // showRed() {
    //   this.hoverValue = 2;
    // },
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
  width: 10%;
}

#greenCircle,
#redCircle,
#whiteCircle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 10px;
  display: inline-block;
  border: 1px solid black;
}

.color-circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 35px;
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

