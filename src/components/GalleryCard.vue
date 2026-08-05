<script setup>
defineProps(['image'])
</script>

<template>
  <div class="container">
    <img :src="{image}" alt="picture">
    <h4>NAME</h4>
    <p>small desc</p>
  </div>
</template>

<style scoped>
.container{
    width: 250px;
    height: 350px;

    background-color: rgb(182, 182, 182);
}
</style>
