import { ReactElement, ReactNode, useContext } from "react"

import { AppContext } from "../../context"

import Header from "./header"
import Footer from "./footer"

import StyledContainer, { Content } from "./styles"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const { dispatch } = useContext(AppContext)
  return (
    <StyledContainer>
      <Header />
      <Content onClick={() => dispatch({ type: "CLOSE_NAVIGATION" })}>
        {children}
      </Content>
      <Footer />
    </StyledContainer>
  )
}

export default Layout
