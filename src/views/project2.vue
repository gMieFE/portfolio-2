<script setup>
import { ref, onMounted } from 'vue'
import { codeToHtml } from 'shiki'
import productPreview from '@/assets/projects/product-preview.vue'
import productPreviewRaw from '@/assets/projects/product-preview.vue?raw'

const highlighted = ref('')

onMounted(async () => {
  highlighted.value = await codeToHtml(productPreviewRaw, {
    lang: 'vue',
    theme: 'github-dark'
  })
})



</script>

<template>
  <div class="container">
    <div class="visual">
      <productPreview />
    </div>

    <div class="code" v-html="highlighted"></div>
  </div>
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
  width: 50%;
  padding: 16px;
  /* transform: scale(0.8); */
}

.code {
  width: 50%;
  max-height: 600px;
  overflow: auto;
}

.code :deep(pre) {
  margin: 0;
  padding: 16px;
}
</style>