<template>
  <card>
    <contents>
      <left-container>
        <div>
          <main-title>{{name}}</main-title>
          <medium>{{medium}}</medium>
          <carousel-container v-if="windowWidth <= 980">
            <styled-carousel v-if="images" :perPage="1">
              <slide v-for="(image, index) in images" :key="index">
                <carousel-image loading="lazy" v-bind:src="image"/>
              </slide>
            </styled-carousel>
          </carousel-container>
          <subtitle>{{summary}}</subtitle>
          <paragraph v-for="(text, index) in copy" :key="index">{{text}}</paragraph>
        </div>
        <button-container :empty="!copy">
          <styled-button
            v-if="links.primary"
            primary
            :color="links.color"
            v-bind:href="links.primary.url"
            target="_blank"
          ><button-text>{{links.primary.name}}</button-text><i class="fas fa-arrow-right"></i></styled-button>
          <styled-button
            v-if="links.secondary"
            secondary
            :color="links.color"
            v-bind:href="links.secondary.url"
            target="_blank"
          ><button-text>{{links.secondary.name}}</button-text><i class="fas fa-arrow-right"></i></styled-button>
        </button-container>
      </left-container>
      <carousel-container v-if="windowWidth > 980">
        <styled-carousel v-if="images" :perPage="1">
          <slide v-for="(image, index) in images" :key="index">
            <carousel-image loading="lazy" v-bind:src="image"/>
          </slide>
        </styled-carousel>
      </carousel-container>
    </contents>
  </card>
</template>

<script>
import styled from 'vue-styled-components'
import { Carousel, Slide } from 'vue-carousel'
import { Subtitle, Paragraph, MainTitle, ButtonText } from './styles/Text.ts'

const Card = styled.div`
  width: ${({theme}) => theme.screen.width.desktop}px;
  background: ${({theme}) => theme.card.background};
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  margin: auto;
  margin-bottom: 80px;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
    margin-bottom: 40px;
  }
  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */
`

const Contents = styled.div`
  display: flex;
  padding: 64px ${({theme}) => theme.screen.padding.desktop}px;
  /* height: 100%; */

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 40px ${({theme}) => theme.screen.padding.tablet}px;
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
    margin: 0;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    padding: 40px ${({theme}) => theme.screen.padding.mobile}px;
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
  }
`

const LeftContainer = styled.div`
  width: 320px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
  }
`

const Medium = styled.div`
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 1.8px;
  margin-bottom: 1.5em;
`

const btnContainerProps = { empty: Boolean }
const ButtonContainer = styled('div', btnContainerProps)`
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin-top: 32px;
  }
  margin-top: ${(props) => props.empty ? 32 : 0}px;
`

const btnProps = { primary: Boolean, secondary: Boolean, color: String }
export const StyledButton = styled('a', btnProps)`
  font-size: 0.66rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  margin-right: 20px;
  border-radius: 24px;
  line-height: 40px;
  color: ${(props) => props.primary ? "#eee" : props.secondary ? props.theme.card.button.text : 'black'};
  background: ${(props) => props.primary ? props.color : props.secondary ? props.theme.card.button.background : 'white'};
  box-shadow: ${(props) => props.primary ? props.theme.card.button.boxShadow.primary : props.secondary ? props.theme.card.button.boxShadow.secondary : 'none'};
  /* Won't transition background since card can't transition. */
  /* transition: 0.3s background; */
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: ${({theme}) => theme.card.button.boxShadow.hover};
    mix-blend-mode: luminosity;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 24px;
    animation: none;
    opacity: 0;
    transition: 0.3s opacity ease-in-out, 0.3s background;
  }
  &:hover::before {
    opacity: ${({theme}) => theme.card.button.hoverIntensity};
    transition: 0.3s opacity ease-in-out, 0.3s background;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  float: right;
  object-fit: cover;
  object-position: top;
  opacity: ${({theme}) => theme.card.carousel.opacity}
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor:grabbing;
  }
`

const CarouselContainer = styled.div`
  margin: auto;
`

const StyledCarousel = styled(Carousel)`
&.VueCarousel {
  box-shadow: ${({theme}) => theme.card.carousel.boxShadow};
  border-radius: 10px;
  overflow: hidden;
  height: 275px;
  width: 500px;
}

& > .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
}

& > * > .VueCarousel-dot-container {
  margin-top: 0px !important;
}

& > * > * > .VueCarousel-dot {
  margin-top: 0px !important;
  background-color: rgb(127 127 127 / 25%) !important;
  transition: 0.3s background-color ease-in-out;
  /* outline: none !important; */
}

& > * > * > .VueCarousel-dot--active {
  background-color: rgb(127 127 127) !important;
  transition: 0.3s background-color ease-in-out;
  /* outline: none !important; */
}

@media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
  &.VueCarousel {
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
    height: ${({theme}) => (theme.screen.width.tablet - theme.screen.padding.tablet * 2) * 8.8 / 16}px;
    margin: 20px 0px;
  }
}

@media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
  &.VueCarousel {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
    height: ${({theme}) => (theme.screen.width.mobile - theme.screen.padding.mobile * 2) * 8.8 / 16}px;
  }
}
`

export default {
  components: {
    Slide,
    Card,
    Contents,
    LeftContainer,
    MainTitle,
    Subtitle,
    Paragraph,
    ButtonContainer,
    StyledButton,
    CarouselImage,
    CarouselContainer,
    StyledCarousel,
    Medium,
    ButtonText
  },
  props: {
    name: String,
    medium: String,
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
