<script setup>
defineProps({
  title: String,
  image: String,
  description: String
})
</script>

<template>
  <div class="container">
    <img :src="image" alt="picture">
    <h4>{{title}}</h4>
    <p>{{ description }}</p>
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
