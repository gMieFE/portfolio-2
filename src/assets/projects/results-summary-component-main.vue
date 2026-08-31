<script setup>
import { ref, computed } from "vue";

const scores = ref([
  {
    name: "Reaction",
    score: 80,
    color: "hsl(0, 100%, 67%)",
    bgColor: "hsla(0, 100%, 67%, 0.1)",
    icon: "/img/icon-reaction.svg",
  },
  {
    name: "Memory",
    score: 92,
    color: "hsl(39, 100%, 56%)",
    bgColor: "hsla(39, 100%, 56%, 0.1)",
    icon: "/img/icon-memory.svg",
  },
  {
    name: "Verbal",
    score: 61,
    color: "hsl(166, 100%, 37%)",
    bgColor: "hsla(166, 100%, 37%, 0.1)",
    icon: "/img/icon-verbal.svg",
  },
  {
    name: "Visual",
    score: 73,
    color: "hsl(234, 85%, 45%)",
    bgColor: "hsla(234, 85%, 45%, 0.1)",
    icon: "/img/icon-visual.svg",
  },
]);

const avgScore = computed(() => {
  const total = scores.value.reduce(
    (currentTotal, subject) => currentTotal + subject.score,
    0,
  );
  return Math.floor(total / scores.value.length);
});

const standing = computed(() => (avgScore.value > 75 ? "higher" : "lower"));
</script>

<template>
  <div class="body">
    <div class="container">
      <div class="summary-container">
        <div style="width: 80%; font-weight: 800; font-size: 25px">
          <p>Summary</p>
        </div>

        <div
          :style="{ color: score.color, backgroundColor: score.bgColor }"
          class="score-tab"
          v-for="score in scores"
          :key="score.name"
        >
          <div style="display: flex; align-items: center; gap: 5px">
            <img :src="score.icon" alt="" />
            <span>{{ score.name }}</span>
          </div>

          <span>{{ score.score }} /100</span>
        </div>

        <button>Continue</button>
      </div>

      <div class="result-container">
        <p
          class="color-light-lavender"
          style="font-weight: 800; font-size: 20px"
        >
          Your result
        </p>
        <div class="result-circle">
          <p style="font-weight: 800; font-size: 60px; margin: 0">
            {{ avgScore }}
          </p>
          <p class="color-light-lavender font-size-paragraph" style="margin: 0">
            of 100
          </p>
        </div>
        <p>Great</p>
        <p
          class="color-light-lavender font-size-paragraph"
          style="text-align: center; width: 80%"
        >
          You scored {{ standing }} than 65% of the people who have taken these
          tests.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.body {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  height: 450px;
  max-width: 700px;

  background-color: rgb(255, 255, 255);

  border-radius: 20px;

  font-family: "Hanken Grotesk", sans-serif;
}

.result-container {
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 20px;
  height: 100%;
  width: 50%;
  padding: 10px;

  background-color: HSL(252, 100%, 67%);
  background: linear-gradient(
    180deg,
    rgba(120, 87, 255, 1) 0%,
    rgba(46, 43, 233, 1) 100%
  );

  color: hsl(0, 0%, 100%);
}

.result-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 50%;
  min-width: 150px;
  aspect-ratio: 1/1;

  border-radius: 50%;

  background-color: HSL(252, 100%, 67%);
  background: linear-gradient(
    0deg,
    hsla(241, 72%, 46%, 0) 0%,
    hsla(256, 72%, 46%, 1) 100%
  );
}

.summary-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50%;
  height: 100%;

  border-radius: 20px;
  background-color: rgb(255, 255, 255);
}

.summary-container button {
  border: none;

  width: 80%;
  height: 50px;

  padding: 5px 10px;
  margin: 15px 0;

  border-radius: 45px;
  background-color: hsl(224, 30%, 27%);
  color: hsl(0, 0%, 100%);
}

.summary-container button:hover {
  background-color: HSL(252, 100%, 67%);
  background: linear-gradient(
    180deg,
    rgba(120, 87, 255, 1) 0%,
    rgba(46, 43, 233, 1) 100%
  );

  cursor: pointer;
}

.score-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 12%;

  padding: 5px 10px;
  margin-bottom: 10px;
  gap: 5px;

  border-radius: 10px;
}

.color-light-lavender {
  color: hsl(241, 100%, 89%);
}

.font-size-paragraph {
  font-size: 18px;
}

@media screen and (max-width: 375px) {
  .container {
    height: 100%;
    flex-direction: column-reverse;
  }

  .result-container {
    height: 100%;
    width: 100%;

    border-radius: 0 0 20px 20px;
  }

  .summary-container {
    width: 100%;
  }
}
</style>
