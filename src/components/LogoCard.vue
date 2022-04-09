<template>
  <styled-a v-bind:href="url" target="_blank" v-bind:aria-label="alt">
    <card>
        <logo v-bind:src="src" v-bind:alt="alt"></logo>
    </card>
  </styled-a>
</template>

<script>
import styled from 'vue-styled-components'

const StyledA = styled.a`
  margin: 2rem 1rem;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin: 1rem 0.5rem;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    margin: 1rem 0.5rem;
  }
`

const Card = styled.div`
  height: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme}) => theme.card.background};
  /* background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%); */
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  padding: 2rem 2.66rem;
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
    url: String,
    alt: String
  }
}
</script>
