import { useState } from "react"

import Header from "./header"
import Footer from "./footer"

import StyledContainer, { Content } from "./styles"

import { handleCloseNavigation } from "./header/navbar/functions"

const Layout = ({ children }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  return (
    <StyledContainer>
      <Header
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
      />
      <Content onClick={() => handleCloseNavigation(setIsNavigationOpen)}>
        {children}
      </Content>
      <Footer />
    </StyledContainer>
  )
}

export default Layout
