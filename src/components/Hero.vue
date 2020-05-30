<template>
  <div class="background">
    <div class="container">
      <div class="text-container">
        <h1>{{author}}</h1>
        <h2>Software engineer at <a class="linked" href="https://www.zendesk.com/about/" target="_blank">Zendesk</a>.</h2>
        <h2>Indie software dev launching <a class="linked" href="/#products">one product</a> at a time.</h2>
        <div class="social-links">
          <h2><a class="linked" href="https://twitter.com/samxstudio" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></h2>
          <h2><a class="linked" href="https://medium.com/sam-xie" target="_blank"><i class="fab fa-medium"></i> Medium</a></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String
  }
}
</script>

<style scoped>
.background {
  background: url("https://res.cloudinary.com/xielabs/image/upload/v1588150730/spheres.jpg");
  background-size: cover;
  background-position: 50%;
  height: 800px;
  width: 100%;
  min-width: var(--mobile-width);
  margin: auto;

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1440px;
}

.container {
  max-width: 980px;
  margin: auto;
  /* padding-top: 180px; */

/* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-container {
  width: 360px;
  margin: 10px;

  /* Responsive */
  margin-top: -20px;
}

.social-links {
  margin: 36px 0px;
  display: flex;
}

.social-links h2 {
  margin-right: 32px
}

h1, h2 {
  font-weight: bold;
}

h1 {
  font-size: 96px;
  margin-bottom: 32px;
}

h2 {
  font-size: 24px;
  margin: 16px 0px;
}

@media screen and (max-width: 980px) {
  .background {
    background-position: 54% 0px;
    background-size: inherit;
  }
  h1 {
    font-size: 72px;
  }

  .text-container {
    width: calc(var(--mobile-width) - var(--mobile-padding-width) * 2);
    margin: auto;
  }
}
</style>
