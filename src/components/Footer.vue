<script setup></script>

<template>
  <div class="component-body">
    <p>miezyte.goda@gmail.com</p>
    <div class="black-line"></div>
  </div>
</template>

<style scoped>
.component-body {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  width: 100vw;
  height: 170px;

  color: rgb(255, 255, 255);

}

.component-body p {
  width: 100vw;
  height: 30%;


  font-family: "VT323", monospace;
  text-shadow:
    0 0 5px #b1c6dd,
    0 0 10px #b1c6dd,
    0 0 20px #b1c6dd,
    0 0 40px #b1c6dd;
  font-size: 28px;
  letter-spacing: 4px;

  border-top: 5px solid #627c97;
}

.black-line {
  background-color: black;
  height: 70%;
  width: 100%;
}
</style>
