import styled from 'vue-styled-components'

export const Linked = styled.a`
&::after {
  width: 0%;
  content: "";
  height: 2px;
  background: var(--link-color);
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

&:hover::after {
  width: 100%;
}
`

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0px;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0 0 0.5em 0;
  line-height: 1.47059;
  letter-spacing: 0.5px;
  font-weight: 300;
`

export const Subtitle = styled(Paragraph)`
  font-weight: 400;
`

export const ButtonText = styled.span`
  margin-right: 0.5em;
`