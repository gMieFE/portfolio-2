<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToProject() {
  router.push("/");
}
</script>

<template>
  <div class="component-body">
    <div class="black-line"></div>
    <h2 @click="$router.push('/')">EXERCISE GALLERY</h2>
  </div>
</template>

<style scoped>
.black-line {
  background-color: black;
  height: 70px;
  width: 100vw;

  margin-bottom: auto;
}

.component-body {
  min-height: 130px;
  min-width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: #627c97;
  color: rgb(255, 255, 255);
}

h2 {
  margin-bottom: auto;
  font-family: "VT323", monospace;
  text-shadow:
    0 0 5px #b1c6dd,
    0 0 10px #b1c6dd,
    0 0 20px #b1c6dd,
    0 0 40px #b1c6dd;
  font-size: 48px;
  letter-spacing: 4px;
}
</style>
