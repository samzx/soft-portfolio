<template>
  <theme-provider :theme="theme">
    <hero
      v-bind:author="author"
    />
    <card-container id="products">
      <card
        v-for="(product, index) in products" :key="index"
        v-bind:name="product.name"
        v-bind:medium="product.medium"
        v-bind:summary="product.summary"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
    </card-container>
    <foot v-bind:author="author" v-bind:links="links" />
    <light-toggle v-on:click="toggleTheme()"><span v-if="!isDark" >💡</span><span v-if="isDark">💡</span></light-toggle>
  </theme-provider>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import Foot from './components/Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import baseData from './data/fixtures.ts'
import light from './themes/light.ts'
import dark from './themes/dark.ts'

const localStore = Vue.observable({
  dark: false
})

const mutations = {
  toggleDark() {
    localStore.dark = !localStore.dark
  },
  setDark(isDark) {
    localStore.dark = isDark
  }
}

// Hack until createGlobalStyles comes to vue-styled-components
const adjustTheme = () => {
  var html = document.getElementsByTagName('html')[0]
  var body = document.getElementsByTagName('body')[0]
  var a = document.getElementsByTagName('a')
  if (localStore.dark) {
    body.style.setProperty("--main-color", dark.color.text)
    html.style.setProperty("--main-background-color", dark.color.background)
    a.forEach((i) => i.style.setProperty("--link-color", dark.color.link))
  } else {
    body.style.setProperty("--main-color", light.color.text)
    html.style.setProperty("--main-background-color", light.color.background)
    a.forEach((i) => i.style.setProperty("--link-color", light.color.link))
  }
}

if (window.matchMedia) {
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(e.matches) {
          localStore.dark = true
        } else {
          localStore.dark = false
        }
        adjustTheme()
    })
  } catch(e) {
    console.error(e)
  }
}

injectGlobal`
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    src: url("/fonts/SFProDisplay-Regular.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 700;
    src: url("/fonts/SFProDisplay-Bold.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 300;
    src: url("/fonts/SFProDisplay-Light.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/SFProDisplay-RegularItalic.ttf");
  }

  html {
    font-family: 'SF Pro Display', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    position: relative;
  }
`

const CardContainer = styled.div`
  margin-top: -60px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin-top: -48px;
  }
`

const LightToggle = styled.button`
  border: none;
  background: transparent;
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
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition: 0.2s transform ease-out;
  }
`

export default {
  name: 'App',
  components: {
    Hero,
    Card,
    Foot,
    ThemeProvider,
    CardContainer,
    LightToggle
  },
  computed: {
    theme() {
      return localStore.dark ? dark : light
    },
    isDark() {
      return localStore.dark
    }
  },
  methods: {
    toggleTheme: () =>{
      mutations.toggleDark()
      adjustTheme()
    },
  },
  data: () => ({
    ...baseData
  }),
  mounted() {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStore.dark = true
    } else {
      localStore.dark = false
    }
    adjustTheme()
    // Avoid buggy animations
    setTimeout(() => {
      var html = document.getElementsByTagName('html')[0]
      html.style.setProperty("transition", "0.3s color, 0.3s background")
      var body = document.getElementsByTagName('body')[0]
      body.style.setProperty("transition", "0.3s color, 0.3s background")
    }, 300)
  }
}
</script>

<style>
/* Hack until createGlobalStyles comes to vue-styled-components */
html {
  background: var(--main-background-color);
}

body {
  color: var(--main-color);
}

a {
  color: var(--link-color);
}
</style>
