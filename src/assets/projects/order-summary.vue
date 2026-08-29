<template>
  <div class="main-body">
    <div class="main-container">
      <img src="./img/order-summary-img/illustration-hero.svg" alt="" />
      <div class="order-summary">
        <h1 style="">Order Summary</h1>
        <p class="text-gray" style="text-align: center; font-size: 16px; margin-bottom: 24px;">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div class="plan-container">
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="./img/order-summary-img/icon-music.svg" alt="" />
            <div style="display: flex; flex-direction: column; gap: 4px; ">
              <p class="text-dark-blue" style=" font-weight: 900; white-space: nowrap;">Annual plan</p>
              <p class="text-gray">$59.99/year</p>
            </div>
          </div>
          <a href="#" class="change-btn">Change</a>
        </div>
        <button type="button">Proceed to payment</button>
        <a class="cancel-button" href="#">Cancel order</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;500;700;900&display=swap');

h1, p{
  margin: 0;
}

.text-gray{
  color: hsl(224, 23%, 55%);
}

.text-dark-blue{
  color: hsl(223, 47%, 23%);
}

.order-summary h1{
  margin-bottom: 24px; 
  font-weight: 900; color:
  hsl(223, 47%, 23%);
}

.main-body {
  height: auto;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  font-family: "Red Hat Display", sans-serif;
}

.main-container {
  width: 400px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 16px;
  background-color: rgb(255, 255, 255);

  box-shadow: 0 10px 30px hsla(245, 83%, 68%, 0.3);
  
}

img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.order-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box;
  padding: 48px;
}

.plan-container {
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
  padding: 16px;
  box-sizing: border-box;

  border-radius: 10px;
  background-color: hsl(225, 100%, 98%); 
}

.change-btn{
  font-weight: 700;
  font-size: 12px;

}

.change-btn:hover{
  color: hsl(245, 83%, 68%);
  text-decoration: none;
}

.plan-container img {
  height: 50px;
}

button{
  width: 100%;
  height: 40px;

  margin-bottom: 24px;

  border: none;
  border-radius: 8px;

  color: white;
  font-weight: 700;

  background-color: hsl(245, 75%, 52%);

  box-shadow: 0 10px 20px hsla(245, 83%, 68%, 0.3);
}

button:hover{
   background-color: hsl(245, 83%, 68%);
   cursor: pointer;
}

.cancel-button{
  font-size: 12px; 
  font-weight: 900; 
  text-decoration: none; 

  color: hsl(224, 23%, 55%);
}

.cancel-button:hover{
  color: hsl(223, 47%, 23%);
}

@media screen and (max-width: 375px){
  .main-body{
    width: 375px;
    height: auto;
  }

  .main-container{
    width: 350px;
  }
  
  .order-summary{
    padding: 32px;
  }
}

</style>
