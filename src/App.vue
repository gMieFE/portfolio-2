<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GalleryCard from "./components/GalleryCard.vue";
import "./assets/main.css";
</script>

<template>
  <div class="main-body">
    <Header />

    <div class="content">
      <h3>No Tailwind</h3>
      <div class="card-container">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>

      <h3>Tailwind</h3>
      <div class="card-container">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>

    <Footer />
  </div>
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
  flex-direction: column;

  padding: 24px;
}

.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
