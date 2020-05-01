<template>
  <div class="card">
    <div class="contents">
      <div class="left">
        <div class="copy">
          <h2>{{accolade}}</h2>
          <h1>{{name}}</h1>
          <div v-if="windowWidth <= 980" class="carousel-container mobile">
            <carousel v-if="images" :perPage="1" :paginationActiveColor="links.color">
              <slide v-for="(image, index) in images" :key="index">
                <img v-bind:src="image"/>
              </slide>
            </carousel>
          </div>
          <p v-for="(text, index) in copy" :key="index" class="copy-description">{{text}}</p>
        </div>
        <div class="buttons">
          <a
            v-if="links.primary"
            class="button primary"
            :style="{'--button-color': links.color}"
            v-bind:href="links.primary.url"
            target="_blank"
          >{{links.primary.name}}</a>
          <a
            v-if="links.secondary"
            class="button secondary"
            :style="{'--button-color': links.color}"
            v-bind:href="links.secondary.url"
            target="_blank"
          >{{links.secondary.name}}</a>
        </div>
      </div>
      <div v-if="windowWidth > 980" class="carousel-container desktop">
        <carousel v-if="images" :perPage="1" :paginationActiveColor="links.color">
          <slide v-for="(image, index) in images" :key="index">
            <img v-bind:src="image"/>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    accolade: String,
    name: String,
    copy: Array,
    links: {
      color: String,
      primary: {
        name: String,
        url: String
      },
      secondary: {
        name: String,
        url: String
      }
    },
    images: Array
  },
  data() {
    return {
        windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  beforeDestroy() {
      window.removeEventListener('resize', () => {});
  }
}
</script>

<style scoped>
.card {
  width: var(--desktop-width);
  background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%);
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.66);
  border-radius: 20px;
  margin: auto;
  position: relative;
  margin-bottom: 80px;
}

.left {
  width: 320px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.copy-description {
  margin: 20px 0px;
}

.contents {
  display: flex;
  padding: 64px var(--desktop-padding-width);
  /* height: 100%; */
}

.carousel-container.desktop {
  margin: auto;
}
.carousel-container.mobile {
 margin: auto;
}

h1 {
  font-size: 36px;
  margin-top: 0px;
}
h2 {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
}
p {
  font-size: 18px;

}

.buttons {
  margin-top: 32px;
}

.button {
  padding: 10px 32px;
  font-weight: bold;
  margin-right: 20px;
  font-size: 18px;
  border-radius: 24px;
  line-height: 40px;

  /* position: absolute;
  bottom: 56px; */
}

.button::before {
  content: "";
  height: 100%;
  width: 100%;
  background: linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.2));
  mix-blend-mode: luminosity;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 24px;
  animation: none;
  opacity: 0;
  transition: 0.3s opacity ease-in-out;
}

.button:hover::before {
  opacity: 1;
  transition: 0.3s opacity ease-in-out;
}

.button.secondary {
  color: var(--button-color);
  background: #fafafa;
  box-shadow: -4px -4px 10px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(0, 0, 0, 0.05);
}

.button.primary {
  background: var(--button-color);
  box-shadow: -4px -4px 10px rgba(255, 255, 255, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.1);
  color: white;
  transition: 0.3s box-shadow ease-in-out;
}

img {
  width: 100%;
  float: right;
  object-fit: cover;
  object-position: top;
}
img:hover {
  cursor: grab;
}
img:active {
  cursor:grabbing;
}

.VueCarousel {
  box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.15), 10px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  height: 275px;
  width: 500px;
}
@media screen and (max-width: 980px) {
  .contents {
    padding: 40px var(--tablet-padding-width);
    width: calc(var(--tablet-width) - var(--tablet-padding-width) * 2);
    margin: 0;
  }
  .left {
    width: calc(var(--tablet-width) - var(--tablet-padding-width) * 2);
  }
  .card {
    width: var(--tablet-width);
  }
  .VueCarousel {
    width: calc(var(--tablet-width) - var(--tablet-padding-width) * 2);
    height: calc((var(--tablet-width) - var(--tablet-padding-width) * 2) * 8.8 / 16);
    margin: 20px 0px;
  }
  .copy-description {
    margin-bottom: 0;
    margin-top: 32px
  }
}

@media screen and (max-width: 600px) {
  .contents {
    padding: 40px var(--mobile-padding-width);
    width: calc(var(--mobile-width) - var(--mobile-padding-width) * 2);
  }
  .left {
    width: calc(var(--mobile-width) - var(--mobile-padding-width) * 2);
  }
  .card {
    width: var(--mobile-width);
  }
  .VueCarousel {
    width: calc(var(--mobile-width) - var(--mobile-padding-width) * 2);
    height: calc((var(--mobile-width) - var(--mobile-padding-width) * 2) * 8.8 / 16);
  }
}

</style>
<style>
.VueCarousel-pagination {
    position: absolute;
    bottom: 0;
}
.VueCarousel-dot {
  /* height: 5px !important;
  width: 20px !important;
  border-radius: 20px !important; */
  outline: none !important;
  transition: 0.3s background-color ease-in-out;
}
.VueCarousel-dot--active {
  /* background-color:#555 !important; */
  transition: 0.3s background-color ease-in-out;
  outline: none !important;
}
</style>