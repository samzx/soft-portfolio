<template>
  <app-footer>
    <author>{{author}}</author>
    <p v-for="(link, index) in links" :key="`product-desctiption-${index}`">
        <linked target="_blank" v-bind:href="link.url">{{link.name}}</linked><slash v-if="index != links.length - 1">/</slash>
    </p>
  </app-footer>
</template>

<script>
import styled from 'vue-styled-components'
import { Linked } from './styles/Text.ts'

const AppFooter = styled.div`
  width: ${({theme}) => theme.screen.width.desktop - theme.screen.padding.desktop * 2}px;
  margin: 64px auto;
  padding: 0px ${({theme}) => theme.screen.padding.desktop}px;
  display: flex;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 0px 20px;
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
  }
`

const Author = styled.p`
  margin-right: 36px;
`

const Slash = styled.span`
  margin: 0 8px;
`

export default {
  components: {
    Linked,
    AppFooter,
    Author,
    Slash
  },
  props: {
    author: String,
    links: Array
  }
}
</script>
