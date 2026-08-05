<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GalleryCard from "./components/GalleryCard.vue";
import "./assets/main.css";

const imageModules = import.meta.glob("@/assets/img/no-tailwind/*", {
  eager: true,
  import: "default",
});

const images = Object.values(imageModules);

const cards = [
  {
    image: images[0],
    title: "Mountain",
    description: "A photo of a snowy mountain"
  },
  {
    image: images[1],
    title: "Forest",
    description: "A peaceful forest in the morning"
  },
  {
    image: images[2],
    title: "Ocean",
    description: "Blue waves and a clear sky1"
  },
  {
    image: images[3],
    title: "Ocean",
    description: "Blue waves and a clear sky2"
  },
  {
    image: images[4],
    title: "Ocean",
    description: "Blue waves and a clear sky3"
  }
];


</script>

<template>
  <div class="main-body">
    <Header />
    <div class="content">
      <div class="buttons">
        <button class="tab-button active">No Tailwind</button>
        <button class="tab-button">Tailwind</button>
      </div>

      <div class="card-container">
        <GalleryCard
          v-for="(card, index) in cards"
          :key="index"
          :image="card.image"
          :title="card.title"
          :description="card.description"
        />
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  padding: 16px;

  border: 2px solid #181818;

  background-color: #41414175;
}

.buttons {
  display: flex;
  gap: 8px;
}

.tab-button {
  width: 250px;
  position: relative;
  top: 2px;
  z-index: -1;

  background-color: #41414193;

  border-top: 2px solid #181818;
  border-left: 2px solid #181818;
  border-right: 2px solid #181818;

  color: rgb(185, 185, 185);

  padding: 8px;
}

.tab-button.active {
  border-bottom: none;
  position: relative;
  top: 2px;
  z-index: 1;

  background-color: #505050;
}
</style>
