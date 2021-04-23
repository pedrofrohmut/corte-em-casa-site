import styled from "styled-components"

import Navbar from "./navbar"

const Header = ({ isNavigationOpen, setIsNavigationOpen }) => (
  <StyledContainer>
    <Navbar
      isNavigationOpen={isNavigationOpen}
      setIsNavigationOpen={setIsNavigationOpen}
    />
  </StyledContainer>
)

const StyledContainer = styled.div``

export default Header
