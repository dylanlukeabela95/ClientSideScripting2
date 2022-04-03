<template>
<div>
  <p>On {{task.date}} @{{task.time}}. It will take approx. {{task.duration}}</p>
  <p>{{task.description}}</p>
</div>
</template>

<script>
export default {
  props: ['task']
}
</script>
