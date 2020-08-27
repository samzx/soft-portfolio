<template>
  <background>
    <container>
      <text-container>
        <heading>{{author}}</heading>
        <subheading>Software engineer at <linked href="https://www.zendesk.com/about/" target="_blank">Zendesk</linked>.</subheading>
        <subheading>Launching new side <linked href="/#products">projects</linked> now and then.</subheading>
        <social-links>
          <social-link-text><linked href="https://twitter.com/samxstudio" target="_blank"><i class="fab fa-twitter"></i> Twitter</linked></social-link-text>
          <social-link-text><linked href="https://medium.com/sam-xie" target="_blank"><i class="fab fa-medium"></i> Medium</linked></social-link-text>
        </social-links>
      </text-container>
    </container>
  </background>
</template>

<script>
import { Linked } from './styles/Text.ts'
import styled from 'vue-styled-components'

const Background = styled.div`
  background: url(${({theme}) => theme.hero.background.image});
  background-size: cover;
  background-position: 50%;
  height: 800px;
  width: 100%;
  min-width: ${({theme}) => theme.screen.width.mobile}px;
  margin: auto;

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1440px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    background-position: 60% -45px;
    background-size: inherit;
}
`

const Container = styled.div`
  max-width: ${({theme}) => theme.screen.width.desktop}px;
  margin: auto;
  /* padding-top: 180px; */

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextContainer = styled.div`
  width: 355px;
  margin: 10px;

  /* Responsive */
  margin-top: -20px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
    margin: auto;
  }
`

const Subheading = styled.h2`
  font-size: 24px;
  margin: 16px 0px;
  font-weight: bold;
`

const Heading = styled.h1`
  font-size: 92px;
  margin-bottom: 32px;
  font-weight: bold;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    font-size: 72px;
  }
`

const SocialLinks = styled.div`
  margin: 36px 0px;
  display: flex;
`

const SocialLinkText = styled(Subheading)`
  margin-right: 32px;
`

export default {
  components: {
    Linked,
    Background,
    Container,
    TextContainer,
    SocialLinks,
    SocialLinkText,
    Heading,
    Subheading,
  },
  props: {
    author: String
  }
}
</script>
