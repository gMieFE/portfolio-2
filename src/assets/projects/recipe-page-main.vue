<script setup>
import omeletteImage from "../public/img/image-omelette.jpeg";

const prepTime = [
  { label: "Total", value: "10 minutes" },
  { label: "Preparation", value: "5 minutes" },
  { label: "Cooking", value: "5 minutes" },
];

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const instructions = [
  {
    title: "Beat the eggs",
    description: "Whisk until well combined.",
  },
  {
    title: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    description:
      " Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. ",
  },
  {
    title: " Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    description: "Whisk until well combined.",
  },
];

const nutrition = [
  { label: "Calories", value: "277kcal" },
  { label: "Carbs", value: "0g" },
  { label: "Protein", value: "20g" },
  { label: "Fat", value: "22g" },
];
</script>

<template>
  <div class="main-body">
    <div class="main-container">
      <img :src="omeletteImage" alt="omelette"/>
      <div>
        <h1 style="margin: 24px 0; font-size: 48px; font-weight: 400; color: hsl(24, 5%, 18%);">Simple Omelette Recipe</h1>
        <p style="margin-bottom: 24px;">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div class="prep-time-container">
          <h3 class="font-outfit" style="color: hsl(332, 51%, 32%);">Preparation time</h3>
          <ul>
            <li style="display: flex; gap: 2px;" v-for="item in prepTime" :key="item.label">
              <p style="font-weight: 700;">{{ item.label }}</p> :
              <p ">{{ item.value }}</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-young-serif">Ingredients</h2>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              <p>{{ ingredient }}</p>
            </li>
          </ul>
        </div>

        <hr style="border-color: hsl(30, 54%, 95%); margin: 24px 0;">

        <div>
          <h2 class="font-young-serif" style="color: hsl(14, 45%, 36%); font-weight: 400;">
            Instructions
          </h2>

          <ol>
            <li v-for="step in instructions" :key="step.title">
              <p style="display: inline; white-space: nowrap;  font-weight: 600;">
                {{ step.title }}:
              </p>
              <p style="display: inline;">
                {{ step.description }}
              </p>
            </li>
          </ol>
        </div>

        <hr style="border-color: hsl(30, 54%, 95%); margin: 24px 0;">

        <h2 class="font-young-serif" style="color:  hsl(14, 45%, 36%); font-weight: 400;">Nutrition</h2>
        
        The table below shows nutritional values per serving without
        the additional fillings.

        <table>
          <tr v-for="item in nutrition" :key="item.label">
            <th scope="row">{{ item.label }}</th>
            <th >{{ item.value }}</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Young+Serif&family=Outfit:wght@400;600;700&display=swap");

table {
  width: 100%;
  margin-top: 24px;

  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid hsl(30, 18%, 87%);
}

tr:last-child {
  border-bottom: none;
}

th,
td {
  padding: 16px 32px;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
}

th:first-child {
  width: 50%;
  text-align: left;
  font-weight: 400;
  color: hsl(30, 10%, 34%);
}

th:last-child {
  text-align: left;
  font-weight: 700;
  color: hsl(14, 45%, 36%);
}

.font-outfit, p, ol {
  font-family: "Outfit", sans-serif;
  color: hsl(30, 10%, 34%);
}


h2{
  color:  hsl(14, 45%, 36%); 
  font-weight: 400;
}

.font-young-serif, h1{
  font-family: "Young Serif", serif;

}

li {
  margin-bottom: 12px;
}

ol li::marker {
  color: hsl(14, 45%, 36%);
  font-weight: 700;
}

ol {
  padding-left: 28px;
}

ol li {
  padding-left: 16px;
}

p{
  font-size: 16px;
}

h1, h3, p{
  margin: 0;
}
.main-body {
  width: 1440px;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: hsl(30, 54%, 90%);
}

.main-container {
  width: 800px;
  min-height: 400px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border-radius: 24px;
  background-color: hsl(0, 0%, 100%);
}

.prep-time-container{
  padding: 24px;

  border-radius: 16px;
  background-color: hsl(330, 100%, 98%);
}

img {
  object-fit: contain;

  border-radius: 16px;
}
</style>
