<script setup>
import GalleryCard from "../components/GalleryCard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToProject() {
  router.push("/project1");
  router.push("/project2");

}

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

// TODO: extract tile from image filename. Probably in a loop.
// look that it gives you: console.log(images);
const cards = [
  {
    image: images[0],
    title: "Mountain",
  },
  {
    image: images[1],
    title: "Forest",
  },
  {
    image: images[2],
    title: "Ocean",
  },
  {
    image: images[3],
    title: "Ocean",
  },
  {
    image: images[4],
    title: "Ocean",
  },
  {
    image: images[5],
    title: "",
  },
];

// TODO: extract tile from image filename. Probably in a loop.
const tailwindCards = [
  {
    image: tailwindImages[0],
    title: "Place H1",
  },
  {
    image: tailwindImages[1],
    title: "Place H2",
  },
  {
    image: tailwindImages[2],
    title: "Place H2",
  },
  {
    image: tailwindImages[3],
    title: "Place H2",
  },
  {
    image: tailwindImages[4],
    title: "Place H2",
    description: "",
  },
  {
    image: tailwindImages[5],
    title: "Place H2",
  },
];
</script>

<template>
  <div>
    <div class="buttons">
      <button
        @click="showTailwind = false"
        class="tab-button"
        :class="{ active: !showTailwind }"
      >
        No Tailwind
      </button>
      <button
        @click="showTailwind = true"
        class="tab-button"
        :class="{ active: showTailwind }"
      >
        Tailwind
      </button>
    </div>
    <div class="card-container" >
      <GalleryCard
        v-for="(card, index) in (showTailwind ? tailwindCards : cards).filter(
          (card) => card.image,
        )"
        :key="card.id ?? index"
        :image="card.image"
        :title="card.title"
        @click="$router.push(`/project${index + 1}`)"
      />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  padding: 16px;

  background-color: #4d6986;
  border-radius: 0px 5px 5px 5px;
}

.buttons {
  display: flex;
  gap: 8px;
}

.tab-button {
  width: 250px;
  position: relative;

  background-color: #3e5c7c;

  color: rgb(175, 192, 206);

  padding: 8px;

  font-family: "VT323", monospace;

  font-size: 16px;
  border-radius: 5px 5px 0px 0px;
}

.tab-button.active {
  border-bottom: none;
  position: relative;
  text-shadow:
    0 0 5px #b1c6dd,
    0 0 10px #b1c6dd,
    0 0 15px #b1c6dd,
    0 0 20px #b1c6dd;

  background-color: #4d6986;
  color: rgb(255, 255, 255);
}
</style>
