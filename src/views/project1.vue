<script setup>
import orderSummary from '@/assets/projects/order-summary.vue';
</script>

<template>
  <div class="container">
    <div class="visual">
      <orderSummary/>
    </div>
    <div class="code">fgs</div>
  </div>
</template>

<style scoped>
.container{
  max-height: 600px;
    display: flex;
    align-items: center;
    margin: auto;
    width: 80vw;

    background-color: #627c97;
    border-radius: 6px;
}
.visual{
    transform: scale(0.8);
    width: 50%;
    padding: 16px;
}
.code{
    width: 50%;
    padding: 16px;
}
</style>
