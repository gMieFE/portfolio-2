<script setup>
import { ref, onMounted } from 'vue'
import { codeToHtml } from 'shiki'
import socialLinksProfile from '@/assets/projects/social-links-profile-main.vue';
import socialLinksProfileRaw from '@/assets/projects/social-links-profile-main.vue?raw'

const highlighted = ref('')

onMounted(async () => {
  highlighted.value = await codeToHtml(socialLinksProfileRaw, {
    lang: 'vue',
    theme: 'github-dark'
  })
})



</script>

<template>
  <div class="container">
    <div class="visual">
      <socialLinksProfile />
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
  width: 50%;
  padding: 16px;
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

button{
  font-family: "VT323", monospace;
  color: white;
  font-size: 32px;
}
</style>