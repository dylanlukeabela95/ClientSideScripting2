<template>
  <!-- eslint-disable -->
  <div>
    <input type="text" placeholder="Enter Name" v-model="employeeName" />
    <button class="btn btn-success" @click="addEmployee()">Add Employee</button>
    <br>
    <br>
    <transition-group tag="ul" name="slide-up" appear class="list-group list-group-flush">
        <li v-for="emp in employees" :key="employees" class="list-group-item">{{emp}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      employeeName: "",
      employees: [],
    };
  },
  methods: {
    addEmployee() {
      this.employees.push(this.employeeName);
      this.employeeName = "";
    },
  },
};
</script>

<style>
    .slide-up-enter-from{
        transform: translateY(10px);
        opacity: 0;
    }

    .slide-up-enter-active{
        transition: all 1s ease;
    }
</style>