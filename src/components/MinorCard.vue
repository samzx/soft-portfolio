<template>
  <card>
    <contents>
      <product-title>{{name}}</product-title>
      <paragraph>{{description}}</paragraph>
    </contents>
    <div>
      <styled-button v-bind:href="link.url" target="_blank" ><button-text>{{link.name}}</button-text><i class="fas fa-arrow-right"></i></styled-button>
    </div>
  </card>
</template>

<script>
import styled from 'vue-styled-components'
import { Paragraph, ButtonText } from './styles/Text.ts'

const Card = styled.div`
  /* width: 100px; */
  height: 200px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme}) => theme.card.background};
  /* background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%); */
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  margin: auto;
  position: relative;
  margin-bottom: 40px;
  padding: 32px ${({theme}) => theme.screen.padding.desktop}px;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 32px ${({theme}) => theme.screen.padding.tablet}px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    padding: 32px ${({theme}) => theme.screen.padding.mobile}px;
  }
  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */
`

const ProductTitle = styled.h1`
  font-size: 24px;
  margin-top: 0px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`

const Contents = styled.div`
  & > * {
    margin: 24px 0px;
  }
`

const StyledButton = styled.a`
  display: block;
  width: fit-content;
  font-size: 0.7rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 0.25rem;
  padding-left: 0px;
  font-weight: bold;
  margin-right: 20px;
  line-height: 40px;
  color: ${(props) => props.theme.color.text};
  transform: translateY(0px);
  transition: 0.3s all ease-out;
  &:hover {
    transform: translateX(2px);
    transition: 0.2s all ease-out;
    /* color: ${({theme}) => theme.color.link}; */
  }
`

export default {
  components: {
    Card,
    ProductTitle,
    Paragraph,
    Contents,
    StyledButton,
    ButtonText
  },
  props: {
    name: String,
    description: String,
    link: {
      name: String,
      url: String
    }
  }
}
</script>
