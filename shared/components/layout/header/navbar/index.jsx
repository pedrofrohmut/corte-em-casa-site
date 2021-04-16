import React, { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { handleToggleNavigation } from "./functions"
import StyledContainer, {
  Logo,
  Navigation,
  ToggleNavigationButton
} from "./styles"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledContainer>
      <Logo>
        <Link href="/">
          <a>Corte em Casa</a>
        </Link>
      </Logo>
      <Navigation isOpen={isOpen}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </Navigation>
      <ToggleNavigationButton
        onClick={() => handleToggleNavigation(isOpen, setIsOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </ToggleNavigationButton>
    </StyledContainer>
  )
}

export default Navbar
