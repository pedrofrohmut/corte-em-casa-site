import {useContext} from "react"

import {AppContext} from "../../context"

import Header from "./header"
import Footer from "./footer"

import StyledContainer, { Content } from "./styles"

const Layout: React.FC = ({ children }) => { 
  const { state, dispatch } = useContext(AppContext)
  return (
  <StyledContainer>
    <Header />
    <Content onClick={() => dispatch({ type: "CLOSE_NAVIGATION" })}>{children}</Content>
    <Footer />
  </StyledContainer>
)
}

export default Layout
