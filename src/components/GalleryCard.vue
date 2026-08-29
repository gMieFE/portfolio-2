<script setup>
// TODO: research how to make vue props required.
// Mark props as required if component assumes that they are required or handle cases when props are not passed in.
defineProps({
  title: String,
  image: String,
})
</script>

<template>
  <div class="container">

    <h3 v-if="title">---{{ title }}---</h3>
    <img v-if="image" :src="image" :alt="title" />


  </div>
</template>

<style scoped>

.container{
    width: 20%;
    min-width: 150px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;

    text-align: center;
    text-transform: uppercase;
    color: white;

    background-color: #627c97;
    box-shadow: 0px 0px 10px #809fc0;
    border-radius: 6px;
}

.container h3{
  font-family: 'VT323', monospace;
  background-color: #91acc9;
  height: 15%;
    text-shadow: 0 0 5px #b1c6dd, 
               0 0 10px #b1c6dd, 
               0 0 20px #b1c6dd, 
               0 0 40px #b1c6dd;
}

.container img{
  width: auto;
  height: 85%;
  object-fit: cover;
}
</style>
