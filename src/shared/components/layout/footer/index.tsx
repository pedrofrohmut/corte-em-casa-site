import { ReactElement } from "react"
import styled from "styled-components"

const Footer = (): ReactElement => (
  <StyledContainer>Copyright &copy; Pedro Frohmut 2021</StyledContainer>
)

const StyledContainer = styled.footer`
  display: block;
  text-align: center;
  padding: 16px 0;
  color: var(--fullWhite);
  background-color: var(--mainBlue2);
  opacity: 0.85;
  margin-top: auto;
  font-size: 0.85rem;
`

export default Footer
