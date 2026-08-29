<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CRT from "./components/CRT.vue";
import "./assets/main.css";

</script>

<template>
  <div class="main-body">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
  <CRT />
</template>

<style scoped>
.main-body {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-height: 635px;
  padding: 12px;
}

</style>
