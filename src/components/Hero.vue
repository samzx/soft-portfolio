<template>
  <background>
    <container>
      <text-container>
        <heading>{{author}}</heading>
        <subtitle>Software engineer at <linked href="https://www.zendesk.com/about/" target="_blank">Zendesk</linked>.</subtitle>
        <paragraph>Building reliable and scalable systems by day. Leveraging technology to launch fully featured <linked href="/#products">products</linked> by night.</paragraph>
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
import { Subtitle, Paragraph } from './styles/Text.ts'

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
  max-height: 1035px;
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
  max-height: 1035px;
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
  font-size: 18px;
  margin: 16px 0px;
  font-weight: 300;
`

const Heading = styled.h1`
  font-size: 92px;
  margin: 32px auto;
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
  font-weight: bold;
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
    Subtitle,
    Paragraph
  },
  props: {
    author: String
  }
}
</script>
