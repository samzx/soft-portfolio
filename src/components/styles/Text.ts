import styled from 'vue-styled-components'

export const Linked = styled.a`
&::after {
  width: 0%;
  content: "";
  height: 3px;
  background: #3B70A2;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

&:hover::after {
  width: 100%;
}
`
