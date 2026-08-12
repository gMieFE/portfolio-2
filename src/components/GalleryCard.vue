<script setup>
defineProps({
  title: String,
  image: String,
})
</script>

<template>
  <div class="container">
    <img v-if="image" :src="image" :alt="title" />

    <h3 v-if="title">---{{ title }}---</h3>

  </div>
</template>

<style scoped>

.container{
    width: 250px;
    height: 300px;
    
    display: flex;
    flex-direction: column;
    padding: 8px;

    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 24px;
    border: 2px solid white;

    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.555);
}

.container h3{
  font-family: 'VT323', monospace;
  margin-bottom: auto;
}

.container img{
  width: 100%;
  height: 80%;
  object-fit: cover;

  margin-bottom: auto;
}
</style>
