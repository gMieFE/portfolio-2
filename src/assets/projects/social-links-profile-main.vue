<script setup></script>

<template>
  <div class="main-container">
    <div class="card">
      <img src="./img/social-links-profile-main-img/avatar-jessica.jpeg" alt="Jessica-photo" />
      <h2 style="font-weight: 700;">Jessica Randall</h2>
      <p style="font-weight: 600; color: hsl(75, 94%, 57%);">London, United Kingdom</p>
      <p style="font-weight: 300;">"Front-end developer and avid reader."</p>
      <div class="btn-container">
        <button class="soc-media-btn">GitHub</button>
        <button class="soc-media-btn">Frontend Mentor</button>
        <button class="soc-media-btn">LinkedIn</button>
        <button class="soc-media-btn">Twitter</button>
        <button class="soc-media-btn" style="margin: 0;">Instagram</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background-color: hsl(0, 0%, 12%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 280px;
  height: 500px;
}

.btn-container{
  background-color: hsl(0, 0%, 12%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
}

.soc-media-btn {
  width: 100%;
  height: 20%;
  border: none;
  border-radius: 7px;
  margin-bottom: 15px;
  padding: 0;
  background-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);

  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.soc-media-btn:hover{
  background-color: hsl(75, 94%, 57%);
  color: hsl(0, 0%, 12%);;
}

h2,
p {
  margin: 0;
  margin-bottom: 10px;
  color: hsl(0, 0%, 100%);
  font-family: "Inter", sans-serif;
}

p{
  margin-bottom: 1.5rem;
  font-size: 14px;
}

img {
  border-radius: 50%;
  height: 100px;
  margin-bottom: 15px;
}

@media screen and (max-width: 375px) {
  .main-container {
    width: 375px;
  }
}
</style>
