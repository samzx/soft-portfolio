<template>
  <card>
    
  </card>
</template>

<script>
import styled from 'vue-styled-components'
import Card from './styles/Card.js'

export default {
  components: {
    Card,
    LeftContainer,
    ProductTitle,
    Paragraph,
  },
  props: {
    name: String,
    medium: Array,
    summary: String,
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
