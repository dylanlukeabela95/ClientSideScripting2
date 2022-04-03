<template>
  <div>
    <input type="text" placeholder="Name" v-model="employeeName" />
    <button class="btn btn-success" @click="addEmployee()">Add Employee</button>
    <br />
    <br />
    <div v-if="emptyName" class="error">Please Enter Name</div>
    <div v-if="duplicate" class="error">Name Already Exists</div>
    <div class="separator"></div>
    <transition-group
      tag="ul"
      appear
      name="slide-up"
      class="list-group list-group-flush"
    >
      <li class="list-group-item" v-for="employee in employees" :key="employee">
        {{ employee }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyName: false,
      duplicate: false,
      employeeName: "",
      employees: [],
    };
  },
  methods: {
    addEmployee() {
      if (this.employeeName != "") {
        this.getDuplicate();
        this.emptyName = false;
      } 
      else 
      {
        this.emptyName = true;
      }

      if (!this.duplicate && !this.emptyName) 
      {
          
        this.employees.push(this.employeeName);
        this.employeeName = "";
        
      }
    },

    setDuplicate(isDuplicate) {
      this.duplicate = isDuplicate;
    },

    getDuplicate() {
      for (var i = 0; i < this.employees.length + 1; i++) {
        if (this.employees[i] == this.employeeName.trim()) {
          return this.setDuplicate(true);
        }
      }
      return this.setDuplicate(false);
    },
  },
};
</script>

<style scoped>
.separator {
  border: 1px solid black;
  margin-top: 20px;
}

li {
  list-style-type: none;
}

.error {
  color: red;
  font-weight: bold;
}
</style>