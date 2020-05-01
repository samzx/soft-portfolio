<template>
  <div>
    <hero
      v-bind:author="author"
    />
    <div class="cards" id="products">
      <card
        v-for="(product, index) in products" :key="index"
        v-bind:accolade="product.accolade"
        v-bind:name="product.name"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
    </div>
    <foot v-bind:author="author" v-bind:links="links" />
    <a class="mail" href="mailto:contact@samxie.net">✉️</a>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Card,
    Foot
  },
  data: () => ({
    author: "Sam Xie",
    products: [
      {
        accolade: "17th on Product Hunt",
        name: "Messengerlytics",
        copy: ["Download your Facebook messages and let our tool generate insights for your friendships."],
        links: {
          color: "#FF7E29",
          primary: {
            name: "Visit",
            url: "https://messengerlytics.com/"
          }
        },
        images: [
          "https://res.cloudinary.com/xielabs/image/upload/v1586508529/wordcloud.png",
          "https://res.cloudinary.com/xielabs/image/upload/v1586508528/activity.png",
          "https://res.cloudinary.com/xielabs/image/upload/v1588248717/Group_9.jpg"
        ]
      },
      {
        accolade: "2,000 Peak MAU",
        name: "MPH Watch",
        copy: ["Clean and simple interface for monitoring cryptocurrency mining activity on Mining Pool Hub. "],
        links: {
          color: "#7793C7",
          primary: {
            name: "Demo",
            url: "http://mphwatch.samxie.net/demo"
          },
          secondary: {
            name: "Login",
            url: "http://mphwatch.samxie.net/"
          }
        },
        images: [
          "https://res.cloudinary.com/xielabs/image/upload/v1541582260/mphwatch.png",
        ]
      },
      {
        accolade: "Unique locomotion",
        name: "Final Slash VR",
        copy: ["A short survival experience on an abandoned planet with fluid locomotion."],
        links: {
          color: "#588372",
          primary: {
            name: "Visit",
            url: "https://samzx.itch.io/final-slash-vr"
          },
        },
        images: [
          "https://img.itch.zone/aW1hZ2UvNDQ5OTA1LzIyNzcwMTAucG5n/794x1000/fEFaLA.png",
          "https://res.cloudinary.com/xielabs/image/upload/v1563021446/1.png",
          "https://img.itch.zone/aW1hZ2UvNDQ5OTA1LzIyNzcwMTMucG5n/794x1000/62X0V0.png"
        ]
      },
      {
        name: "More works on",
        links: {
          color: "#363636",
          primary: {
            name: "Github",
            url: "https://github.com/samzx"
          },
          secondary: {
            name: "Medium",
            url: "https://medium.com/sam-xie"
          },
        }
      }
    ],
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/samxstudio"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/xiesam/"
      },
      {
        name: "Email",
        url: "mailto:contact@samxie.net"
      },
    ]
  })
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #F1F1F1;
}

body {
  margin: 0px;
}

html {
  scroll-behavior: smooth;
}

a {
  color: #3B70A2;
  text-decoration: none;
  position: relative;
}

.linked::after {
  width: 0%;
  content: "";
  height: 3px;
  background: #3B70A2;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

.linked:hover::after {
  width: 100%;
}

.mail {
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
  transform: translateY(0px);
  transition: 0.3s transform ease-out;
}
.mail:hover {
  transform: translateY(-5px);
  transition: 0.2s transform ease-out;
}
.cards {
  margin-top: -80px;
}

</style>
