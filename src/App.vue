<template>
  <theme-provider :theme="theme">
    <hero
      v-bind:author="author"
      v-bind:subtitle="hero.subtitle"
      v-bind:description="hero.description"
      v-bind:cta="hero.cta"
    />
    <card-container id="products">
      <card
        v-for="(product, index) in products.featured" :key="index"
        v-bind:name="product.name"
        v-bind:medium="product.medium"
        v-bind:summary="product.summary"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
      <minor-card-container>
        <minor-card
          v-for="(product, index) in products.minor && products.minor.slice(0,3)" :key="index"
          v-bind:name="product.name"
          v-bind:description="product.description"
          v-bind:link="product.link"
        />
      </minor-card-container>
      <logo-section-container>
        <main-title>{{logoSection.title}}</main-title>
        <logo-container>
          <logo-card
            v-for="(logo, index) in logoSection.logos && logoSection.logos.slice(0,3)" :key="index"
            v-bind:src="logo.src"
            v-bind:url="logo.url"
            v-bind:alt="logo.alt"
          />
        </logo-container>
      </logo-section-container>
    </card-container>
    <foot v-bind:author="author" v-bind:footer="footer" />
    <light-toggle v-on:click="toggleTheme()"><span v-if="!isDark" >💡</span><span v-if="isDark">💡</span></light-toggle>
  </theme-provider>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import MinorCard from './components/MinorCard.vue'
import LogoCard from './components/LogoCard.vue'
import Foot from './components/Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import { MainTitle } from './components/styles/Text.ts'
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
  if (localStore.dark) {
    document.documentElement.style.setProperty("--main-color", dark.color.text)
    document.documentElement.style.setProperty("--main-background-color", dark.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", dark.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", dark.color.link)
  } else {
    document.documentElement.style.setProperty("--main-color", light.color.text)
    document.documentElement.style.setProperty("--main-background-color", light.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", light.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", light.color.link)
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

const setup = () => {
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStore.dark = true
  } else {
    localStore.dark = false
  }
  adjustTheme()

  var html = document.getElementsByTagName('html')[0]
  html.style.setProperty("transition", "0.3s color, 0.3s background")
  var body = document.getElementsByTagName('body')[0]
  body.style.setProperty("transition", "0.3s color, 0.3s background")
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

const MinorCardContainer = styled.div`
  margin: auto;
  margin-bottom: 80px;
  width: ${({theme}) => theme.screen.width.desktop}px;
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
    flex-direction: column;
  }
  & > * {
    margin: 16px;
  }
  & > *:nth-child(3n+1) {
    margin-left: 0px;
  }
  & > *:nth-child(3n+0) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    & > * {
      margin: 16px 0px;
    & > *:nth-child(3n+1) {
      margin: 16px 0px;
    }
    & > *:nth-child(3n+0) {
      margin: 16px 0px;
    }
  }
  }
`

const LogoSectionContainer = styled.div`
  margin:auto;
  text-align: center;
  width: ${({theme}) => theme.screen.width.desktop}px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  justify-content: center;
  margin:auto;
  margin-top: 20px;
  width: ${({theme}) => theme.screen.width.desktop}px;
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
    flex-direction: column;
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
    MinorCard,
    MinorCardContainer,
    Foot,
    ThemeProvider,
    CardContainer,
    LightToggle,
    MainTitle,
    LogoContainer,
    LogoSectionContainer,
    LogoCard
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
  })
}
setup()
</script>

<style>
/* Hack until createGlobalStyles comes to vue-styled-components */
html {
  background: var(--main-background-color);
  background-color: var(--fallback-background-color);
}

body {
  color: var(--main-color);
}

a {
  color: var(--link-color);
}
</style>
