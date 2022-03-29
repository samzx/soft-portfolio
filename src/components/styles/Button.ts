import styled from 'vue-styled-components'

const StyledButton = styled('a', btnProps)`
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 14px 32px;
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
