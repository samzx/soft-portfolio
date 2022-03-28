<template>
  <styled-a v-bind:href="url" target="_blank">
    <card>
        <logo v-bind:src="src"></logo>
    </card>
  </styled-a>
</template>

<script>
import styled from 'vue-styled-components'

const StyledA = styled.a`
  margin: 36px 16px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin: 18px 8px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    margin: 18px 8px;
  }
`

const Card = styled.div`
  /* width: 240px; */
  height: 40px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme}) => theme.card.background};
  /* background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%); */
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  padding: 36px 48px;
  position: relative;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */

  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */

  display: block;
  transform: translateY(0px);
  transition: 0.3s transform ease-out, 0.3s filter ease-out;
  filter: saturate(0);

  &:hover {
    transform: translateY(-4px);
    transition: 0.2s transform ease-out, 0.3s filter ease-out;
    filter: saturate(0);
  }
`

const Logo = styled.img`
  height: 100%;
  mix-blend-mode: exclusion;
  filter: invert(1);
  opacity: 0.8;
`

export default {
  components: {
    Card,
    Logo,
    StyledA
  },
  props: {
    src: String,
    url: String
  }
}
</script>
