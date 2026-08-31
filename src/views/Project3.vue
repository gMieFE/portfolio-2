<script setup>
import { ref, onMounted } from 'vue'
import { codeToHtml } from 'shiki'
import recipePage from '@/assets/projects/recipe-page-main.vue'
import recipePageRaw from '@/assets/projects/recipe-page-main.vue?raw'

const highlighted = ref('')

onMounted(async () => {
  highlighted.value = await codeToHtml(recipePageRaw, {
    lang: 'vue',
    theme: 'github-dark'
  })
})



</script>

<template>
  <div class="container">
    <div class="visual">
      <div class="scale">
        <recipePage />
      </div>
    </div>

    <div class="code" v-html="highlighted"></div>
  </div>
  <button @click="$router.push('/')" >BACK</button>

</template>

<style scoped>
.container {
  max-height: 600px;
  display: flex;
  align-items: center;
  margin: auto;
  width: 80vw;
  background-color: #627c97;
  border-radius: 6px;
  overflow: hidden;
}

.visual {
  width: 40%;
  padding: 16px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.scale {
  transform: scale(0.32);
  transform-origin: center center;
}

.code {
  width: auto;
  max-height: 600px;
  overflow: auto;
}

.code :deep(pre) {
  margin: 0;
  padding: 16px;
}

button{
  font-family: "VT323", monospace;
  color: white;
  font-size: 32px;
}
</style>