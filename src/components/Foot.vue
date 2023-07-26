<template>
  <app-footer>
    <div>
      <subtitle>{{footer.tagline}}</subtitle>
    </div>
    <icon-container>
      <icons v-for="(link, index) in footer.links" :key="`product-desctiption-${index}`" v-bind:href="link.url" target="_blank"><i v-bind:class="link.fa"></i></icons>
    </icon-container>
  </app-footer>
</template>

<script>
import styled from 'vue-styled-components'
import { Subtitle } from './styles/Text.ts'

const AppFooter = styled.div`
  width: ${({theme}) => theme.screen.width.desktop - theme.screen.padding.desktop * 2}px;
  margin: 64px auto;
  padding: 0px ${({theme}) => theme.screen.padding.desktop}px;
  display: flex;
  font-weight: 600;
  flex-direction: column;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 0px 20px;
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
  }
`

const Icons = styled.a`
  padding: 8px;
  margin-right: 16px;
  color: ${({theme}) => theme.color.text};
  opacity: 0.5;
  transform: translateY(0px);
  transition: 0.3s all ease-out;

  &:hover {
    transform: translateY(-2px);
    transition: 0.2s all ease-out;
    opacity: 1;
    /* color: ${({theme}) => theme.color.link}; */
  }
`
const IconContainer = styled.div`
  display: flex;
`

export default {
  components: {
    AppFooter,
    Icons,
    IconContainer,
    Subtitle
  },
  props: {
    footer: {
      tagline: String,
      links: Array
    }
  }
}
</script>
