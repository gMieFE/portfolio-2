<script setup></script>

<template>
  <div class="component-body">
    <div class="black-line"></div>
    <h2>EXERCISE GALLERY</h2>
  </div>
</template>

<style scoped>
.black-line{
  background-color: black;
  height: 70px;
  width: 100vw;

  margin-bottom: auto;
}

.component-body{
  min-height: 130px;
  min-width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;


  background-color: #292929;
  border-bottom: 2px solid #181818;
  color: rgb(185, 185, 185);
}

h2{
   margin-bottom: auto;
}

</style>
