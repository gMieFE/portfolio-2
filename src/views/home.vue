<script setup>
import GalleryCard from "../components/GalleryCard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showTailwind = ref(false);

const imageModules = import.meta.glob("@/assets/img/no-tailwind/*", {
  eager: true,
  import: "default",
});

const images = Object.entries(imageModules).map(([path, src]) => ({
  name: path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, ""),
  src,
}));

// const tailwindImageModules = import.meta.glob("@/assets/img/tailwind/*", {
//   eager: true,
//   import: "default",
// });

// const tailwindImages = Object.entries(tailwindImageModules).map(
//   ([path, src]) => ({
//     name: path.split("/").pop().replace(/\.[^/.]+$/, ""),
//     src,
//   })
// );

// TODO: extract tile from image filename. Probably in a loop.
// look that it gives you: console.log(images);
</script>

<template>
  <div>
    <div class="buttons">
      <button
        @click="showTailwind = false"
        class="tab-button"
        :class="{ active: !showTailwind }"
      >
        PROJECTS
      </button>
      <!-- <button
        @click="showTailwind = true"
        class="tab-button"
        :class="{ active: showTailwind }"
      >
        Tailwind
      </button> -->
    </div>
    <div class="card-container">
      <GalleryCard
        v-for="(card, index) in showTailwind ? tailwindImages : images"
        :key="card.name ?? index"
        :image="card.src ?? card"
        :title="card.name ?? ''"
        @click="$router.push(`/Project${index + 1}`)"
      />
    </div>
    <h3>EXERCISES FROM www.frontendmentor.io</h3>
  </div>
</template>

<style scoped>

h3{
  font-family: "VT323", monospace;
  text-shadow:
    0 0 5px #b1c6dd,
    0 0 10px #b1c6dd,
    0 0 20px #b1c6dd,
    0 0 40px #b1c6dd;
    color: white;
    letter-spacing: 5px;
    text-transform: uppercase;
}
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
  letter-spacing: 3px;
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
