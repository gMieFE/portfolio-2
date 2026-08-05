<script setup></script>

<template>
  <div class="component-body">
    <p>miezyte.goda@gmail.com</p>
    <div class="black-line"></div>
  </div>
</template>

<style scoped>

.component-body{
  display: flex;
  align-items:  center;
  flex-direction: column;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;


  background-color: #292929;
  color: rgb(185, 185, 185);

  border-top: 2px solid #181818;
}

.component-body p{
  margin: 8px 0;
}

.black-line{
  background-color: black;
  height: 70px;
  width: 100vw;
}


</style>
