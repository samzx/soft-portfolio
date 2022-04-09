<template>
  <background>
    <container>
      <text-container>
        <heading>{{author}}</heading>
        <subtitle>{{subtitle}}</subtitle>
        <paragraph>{{description}}</paragraph>
        <cta-section>
          <styled-button secondary :color="'#363636'" v-bind:href="'/#products'"><button-text>{{cta}}</button-text><i class="fas fa-arrow-down"></i></styled-button>
        </cta-section>
      </text-container>
    </container>
  </background>
</template>

<script>
import styled from 'vue-styled-components'
import { Subtitle, Paragraph, ButtonText } from './styles/Text.ts'
import { StyledButton } from './Card.vue'

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
  /* TODO: CONFIGURABLE */
  width: 370px;
  margin: 10px;

  /* Responsive */
  margin-top: -20px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
    margin: auto;
  }
`

const Heading = styled.h1`
  font-size: 5rem;
  margin: 32px auto;
  font-weight: bold;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    font-size: 72px;
  }
`

const CtaSection = styled.div`
  margin: 36px 0px;
`

export default {
  components: {
    Background,
    Container,
    TextContainer,
    CtaSection,
    Heading,
    Subtitle,
    Paragraph,
    StyledButton,
    ButtonText
  },
  props: {
    author: String,
    cta: String,
    subtitle: String,
    description: String
  }
}
</script>
