<script setup>
defineProps({
  title: String,
  image: String,
  description: String
})
</script>

<template>
  <div class="container">
    <img v-if="image" :src="image" :alt="title" />

    <h3 v-if="title">{{ title }}</h3>

    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.container{
    width: 300px;
    height: 350px;
    
    display: flex;
    flex-direction: column;
    
    background-color: rgb(182, 182, 182);
}

.container img{
  width: 100%;
  height: 50%;
  object-fit: cover;
}
</style>
