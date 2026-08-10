<template>
  <div class="crt">
    <div class="glow"></div>
  </div>
</template>

<style>
.crt {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  background: repeating-linear-gradient(
    to bottom,
    rgba(24, 24, 24, 0.25)  0px,
    rgba(24, 24, 24, 0.25)  2px,
    transparent 2px,
    transparent 4px
  );

  backdrop-filter: blur(0.6px);
}

.glow {
    
}
</style>
