import { ReactElement } from "react"
import styled from "styled-components"

import Navbar from "./navbar"

const Header = (): ReactElement => (
  <StyledContainer>
    <Navbar />
  </StyledContainer>
)

const StyledContainer = styled.div``

export default Header
