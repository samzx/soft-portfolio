import styled from 'vue-styled-components'

export const Card = styled.div<Props>`
  width: ${({theme}) => theme.screen.width.desktop}px;
  background: ${({theme}) => theme.card.background};
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  margin: auto;
  position: relative;
  margin-bottom: 80px;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
  }
  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */
`
