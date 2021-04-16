import Header from "./header"
import Footer from "./footer"

import StyledContainer, { Content } from "./styles"

const Layout = ({ children }) => (
  <StyledContainer>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </StyledContainer>
)

export default Layout
