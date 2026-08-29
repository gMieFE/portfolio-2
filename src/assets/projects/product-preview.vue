n<script setup></script>

<template>
  <div class="main-body">
    <div class="main-container">
      <div class="bio-container">
        <p class="font-montserrat" style="font-size: 8px; color: hsl(228, 12%, 48%); text-transform: uppercase; letter-spacing: 5px;" >Perfume</p>
        <h1 class="font-fraunces" style="font-size: 32px;">Gabrielle Essence Eau De Parfum</h1>
        <p class="font-montserrat" style="font-size: 14px; font-weight: 500; color: hsl(228, 12%, 48%);">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div class="price-container">
          <p class="font-fraunces" style="margin: 0; color: hsl(158, 36%, 37%); font-size: 24px; font-weight: 700;">$149.99</p>
          <p class="font-montserrat" style="margin: 0; color: hsl(228, 12%, 48%);font-size: 12px; text-decoration: line-through;">$169.99</p>
        </div>

        <div class="button-container">
          <button style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <img style="max-height: 40%; transform: scaleX(-1); " src="./img/product-preview-img/icon-cart.svg" alt="cart-icon ">
            Add to Cart
          </button>
        </div>
      </div>
      <img src="./img/product-preview-img/image-product-desktop.jpg" alt="perfume-picture" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&display=swap');


p, h1{
  margin: 0;
  margin-bottom: 12px;
}
.main-body {
  height: 700px;
  width: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

}

.main-container {
  background-color: hsl(0, 0%, 100%);
  width: 560px;
  height: 420px;

  display: flex;
  flex-direction: row-reverse;

  border-radius: 10px;
}

.bio-container {
  width: 50%;
  height: 100%;

  padding: 24px;
}

.price-container{
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 16px;
}

.bio-container button {
  width: 100%;
  height: 40px;

  background-color: hsl(158, 36%, 37%);
  color: hsl(0, 0%, 100%);

  border: none;
  border-radius: 10px;
}
.bio-container button:hover{
  background-color: hsl(158, 42%, 18%);
} 

.button-container {
  display: flex;
  justify-content: center;

  width: 100%;
}

img {
  max-width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
}

.font-montserrat{
  font-family: "Montserrat", sans-serif;
  
}

.font-fraunces{
  font-family: "Fraunces", serif;
  font-weight: 700;
}


</style>
