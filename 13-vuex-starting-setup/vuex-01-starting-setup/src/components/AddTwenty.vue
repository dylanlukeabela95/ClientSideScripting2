<template>
    <button @click="addTwenty">Add 20</button>
</template>

<script>
export default {
    methods:
    {
        addTwenty()
        {
            this.$store.commit("increase", 20);
        }
    }
}
</script>