<template>
  <card>
    <contents>
      <left-container>
        <div>
          <subtitle>{{accolade}}</subtitle>
          <product-title>{{name}}</product-title>
          <div v-if="windowWidth <= 980" class="carousel-container mobile">
            <carousel v-if="images" :perPage="1" :paginationActiveColor="links.color">
              <slide v-for="(image, index) in images" :key="index">
                <img v-bind:src="image"/>
              </slide>
            </carousel>
          </div>
          <paragraph v-for="(text, index) in copy" :key="index">{{text}}</paragraph>
        </div>
        <button-container>
          <styled-button
            v-if="links.primary"
            primary
            :color="links.color"
            v-bind:href="links.primary.url"
            target="_blank"
          >{{links.primary.name}}</styled-button>
          <styled-button
            v-if="links.secondary"
            secondary
            :color="links.color"
            v-bind:href="links.secondary.url"
            target="_blank"
          >{{links.secondary.name}}</styled-button>
        </button-container>
      </left-container>
      <carousel-container v-if="windowWidth > 980">
        <styled-carousel v-if="images" :perPage="1" :paginationActiveColor="links.color">
          <slide v-for="(image, index) in images" :key="index">
            <carousel-image v-bind:src="image"/>
          </slide>
        </styled-carousel>
      </carousel-container>
    </contents>
  </card>
</template>

<script>
import styled from 'vue-styled-components'
import { Carousel, Slide } from 'vue-carousel'

const Card = styled.div`
  width: ${({theme}) => theme.screen.width.desktop}px;
  background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%);
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin: auto;
  position: relative;
  margin-bottom: 80px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
  }
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

const ProductTitle = styled.h1`
  font-size: 36px;
  margin-top: 0px;
`

const Subtitle = styled.h2`
  font-size: 16px;
  color: #888;
  margin-bottom: 8px;
`

const Paragraph = styled.p`
  font-size: 18px;
  margin: 20px 0px;
  line-height: 1.47059;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin-bottom: 0;
    margin-top: 32px
  }
`

const ButtonContainer = styled.div`
  margin-top: 32px;
`

const btnProps = { primary: Boolean, secondary: Boolean, color: String }
const StyledButton = styled('a', btnProps)`
  padding: 10px 32px;
  font-weight: bold;
  margin-right: 20px;
  font-size: 18px;
  border-radius: 24px;
  line-height: 40px;
  color: ${(props) => props.primary ? 'white' : props.secondary ? props.color : 'black'};
  background: ${(props) => props.primary ? props.color : props.secondary ? '#fafafa' : 'white'};
  box-shadow: ${(props) => props.primary ? `-4px -4px 10px rgba(255, 255, 255, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.1)` : props.secondary ? `-4px -4px 10px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(0, 0, 0, 0.05)` : 'none'};
  transition: 0.3s box-shadow ease-in-out;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.2));
    mix-blend-mode: luminosity;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 24px;
    animation: none;
    opacity: 0;
    transition: 0.3s opacity ease-in-out;
  }
  &:hover::before {
    opacity: 1;
    transition: 0.3s opacity ease-in-out;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  float: right;
  object-fit: cover;
  object-position: top;
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
  box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.8), 10px 10px 30px rgba(0, 0, 0, 0.05);
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
  outline: none !important;
  transition: 0.3s background-color ease-in-out;
}

& > * > * > .VueCarousel-dot--active {
  transition: 0.3s background-color ease-in-out;
  outline: none !important;
}

@media screen and (max-width: ${({theme}) => `${theme.screen.width.desktop}px`}) {
  &.VueCarousel {
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
    height: ${({theme}) => (theme.screen.width.tablet - theme.screen.padding.tablet * 2) * 8.8 / 16}px;
    margin: 20px 0px;
  }
}

@media screen and (max-width: ${({theme}) => `${theme.screen.width.tablet}px`}) {
  &.VueCarousel {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
    height: ${({theme}) => (theme.screen.width.mobile - theme.screen.padding.mobile * 2) * 8.8 / 16}px;
  }
}
`

export default {
  components: {
    Carousel,
    Slide,
    Card,
    Contents,
    LeftContainer,
    ProductTitle,
    Subtitle,
    Paragraph,
    ButtonContainer,
    StyledButton,
    CarouselImage,
    CarouselContainer,
    StyledCarousel
  },
  props: {
    accolade: String,
    name: String,
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
