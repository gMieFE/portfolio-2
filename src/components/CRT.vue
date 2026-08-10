<template>
  <div class="crt">
    <div class="glow"></div>
  </div>
</template>

<style scoped>
.crt {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  background: repeating-linear-gradient(
    to bottom,
    rgba(24, 24, 24, 0.15)  0px,
    rgba(24, 24, 24, 0.15)  2px,
    transparent 2px,
    transparent 4px
  );

  backdrop-filter: blur(0.5px); 

  animation: 
    scanLines 0.15s linear infinite,
    crt-flicker 0.12s infinite;
}

.glow {
  position: absolute;
  inset: 0;
  z-index: 3;

  background: radial-gradient(
    circle at center,
    rgba(233, 245, 252, 0.2) 0%,
    rgba(131, 137, 141, 0.2) 50%,
    transparent 100%
  );

  animation: glow-flicker 2s infinite;
}

@keyframes crt-flicker {
  0% {
    opacity: 1;
  }

  20% {
    opacity: 0.96;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0.98;
  }

  80% {
    opacity: 0.97;
  }

  100% {
    opacity: 1;
  }
}


@keyframes glow-flicker {
  0% {
    opacity: 0.85;
  }

  55% {
    opacity: 0.9;
  }


  100% {
    opacity: 0.85;
  }
}


@keyframes scanLines {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 0 8px;
  }
}
</style>
