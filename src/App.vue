<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GalleryCard from "./components/GalleryCard.vue";
import CRT from "./components/CRT.vue";
import "./assets/main.css";

import { ref } from "vue";

const showTailwind = ref(false);

const imageModules = import.meta.glob("@/assets/img/no-tailwind/*", {
  eager: true,
  import: "default",
});

const images = Object.values(imageModules);

const tailwindImageModules = import.meta.glob("@/assets/img/tailwind/*", {
  eager: true,
  import: "default",
});

const tailwindImages = Object.values(tailwindImageModules);

const cards = [
  {
    image: images[0],
    title: "Mountain",
    description: "A photo of a snowy mountain",
  },
  {
    image: images[1],
    title: "Forest",
    description: "A peaceful forest in the morning",
  },
  {
    image: images[2],
    title: "Ocean",
    description: "Blue waves and a clear sky1",
  },
  {
    image: images[3],
    title: "Ocean",
    description: "Blue waves and a clear sky2",
  },
  {
    image: images[4],
    title: "Ocean",
    description: "Blue waves and a clear sky3",
  },
  {
    image: images[5],
    title: "",
    description: "",
  },
];

const tailwindCards = [
  {
    image: tailwindImages[0],
    title: "Place H1",
    description: "",
  },
  {
    image: tailwindImages[1],
    title: "Place H2",
    description: "",
  },
  {
    image: tailwindImages[2],
    title: "Place H2",
    description: "",
  },
  {
    image: tailwindImages[3],
    title: "Place H2",
    description: "",
  },
  {
    image: tailwindImages[4],
    title: "Place H2",
    description: "",
  },
  {
    image: tailwindImages[5],
    title: "Place H2",
    description: "",
  },
];
</script>

<template>
  <div class="main-body">
    <Header />
    <div class="content">
      <div class="buttons">
        <button @click="showTailwind = false" class="tab-button" :class="{ active: !showTailwind }">
          No Tailwind
        </button>
        <button @click="showTailwind = true" class="tab-button" :class="{ active: showTailwind }">
          Tailwind
        </button>
      </div>
      <div class="card-container">
        <GalleryCard
          v-for="(card, index) in (showTailwind ? tailwindCards : cards).filter(
            (card) => card.image,
          )"
          :key="card.id ?? index"
          :image="card.image"
          :title="card.title"
          :description="card.description"
        />
      </div>
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
  flex-direction: column;

  padding: 24px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  padding: 16px;

  background-color: #41414175;
}

.buttons {
  display: flex;
  gap: 8px;
}

.tab-button {
  width: 250px;
  position: relative;
  left: -2px;

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

  background-color: #505050;
}
</style>
