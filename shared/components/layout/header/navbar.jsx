import Link from "next/link"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => (
  <StyledContainer>
    <Logo>
      <Link href="/">
        <a>Corte em Casa</a>
      </Link>
    </Logo>
    <Navigation>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Link href="/contact">
        <a>Contato</a>
      </Link>
    </Navigation>
    <ToggleNavigationButton>
      <FontAwesomeIcon icon={faBars} />
    </ToggleNavigationButton>
  </StyledContainer>
)

const StyledContainer = styled.div``

const Logo = styled.div`
  display: none;
`

const Navigation = styled.nav`
  display: none;
`

const ToggleNavigationButton = styled.div``

export default Navbar
