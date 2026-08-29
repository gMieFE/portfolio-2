<script setup>
import { ref, onMounted } from 'vue'
import { codeToHtml } from 'shiki'
import OrderSummary from '@/assets/projects/order-summary.vue'
import OrderSummaryRaw from '@/assets/projects/order-summary.vue?raw'

const highlighted = ref('')

onMounted(async () => {
  highlighted.value = await codeToHtml(OrderSummaryRaw, {
    lang: 'vue',
    theme: 'github-dark'
  })
})



</script>

<template>
  <div class="container">
    <div class="visual">
      <OrderSummary />
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
  width: 30%;
  padding: 16px;
  transform: scale(0.8);
}

.code {
  width: 70%;
  max-height: 600px;
  overflow: auto;
}

.code :deep(pre) {
  margin: 0;
  padding: 16px;
}
</style>