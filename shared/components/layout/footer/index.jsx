import styled from "styled-components"

const Footer = () => (
  <StyledContainer>Copyright &copy; Pedro Frohmut 2021</StyledContainer>
)

const StyledContainer = styled.footer`
  display: block;
  text-align: center;
  padding: 16px 0;
  color: var(--grey-4);
  background-color: var(--grey1);
  opacity: 0.9;
  margin-top: auto;
  font-size: 0.85rem;
`

export default Footer
