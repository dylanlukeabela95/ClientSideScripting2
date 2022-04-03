
<template>
  <div>
    <input type="text" v-model="newEmployee" placeholder="Name" />
    <button class="btn btn-success" @click="addEmployee">Add Employee</button>
    <transition-group tag="ul" appear name="slide-up" class="list-group list-group-flush">
          <li class="list-group-item" v-for="emp in employees" :key="emp">{{ emp }}</li>
      </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Employees',
  data () {
    return {
      newEmployee: '',
      employees: ['Carlo Borg', 'John Micallef', 'Joe Borg']
    }
  },
  methods: {
    addEmployee () {
      if (this.newEmployee !== '') {
        this.employees.push(this.newEmployee)
        this.newEmployee = ''
      }
    }
  }
}
</script>
