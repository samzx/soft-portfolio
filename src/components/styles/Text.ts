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

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 4px;
  letter-spacing: 1px;
  font-weight: 400;
  font-style: italic;
`

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0px 0px 20px 0px;
  line-height: 1.47059;
  letter-spacing: 0.25px;
  font-weight: 300;
  margin-bottom: 0;
`
