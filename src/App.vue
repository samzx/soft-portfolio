<template>
  <theme-provider :theme="theme">
    <hero
      v-bind:author="author"
    />
    <CardContainer id="products">
      <card
        v-for="(product, index) in products" :key="index"
        v-bind:accolade="product.accolade"
        v-bind:name="product.name"
        v-bind:copy="product.copy"
        v-bind:links="product.links"
        v-bind:images="product.images"
      />
    </CardContainer>
    <foot v-bind:author="author" v-bind:links="links" />
    <mail href="mailto:contact@samxie.net">✉️</mail>
  </theme-provider>
</template>

<script>
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import Foot from './components/Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import baseData from './data/fixtures.ts'
import theme from './theme.ts'

injectGlobal`
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      Roboto, 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    font-size: 18px;
    color: #222;
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
`

const CardContainer = styled.div`
  margin-top: -60px;
`

const Mail = styled.a`
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
    Mail
  },
  data: () => ({
    ...baseData,
    theme
  })
}
</script>
