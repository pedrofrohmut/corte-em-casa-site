import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { handleToggleNavigation, handleCloseNavigation } from "./functions"
import StyledContainer, {
  Logo,
  Navigation,
  ToggleNavigationButton
} from "./styles"

const Navbar = ({ isNavigationOpen, setIsNavigationOpen }) => (
  <StyledContainer>
    <Logo>
      <Link href="/">
        <a>Corte em Casa</a>
      </Link>
    </Logo>
    <Navigation isNavigationOpen={isNavigationOpen}>
      <ul>
        <li onClick={() => handleCloseNavigation(setIsNavigationOpen)}>
          <Link href="/">
            <a>Preload</a>
          </Link>
        </li>
        <li onClick={() => handleCloseNavigation(setIsNavigationOpen)}>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </li>
        <li onClick={() => handleCloseNavigation(setIsNavigationOpen)}>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>
    </Navigation>
    <ToggleNavigationButton
      onClick={() =>
        handleToggleNavigation(isNavigationOpen, setIsNavigationOpen)
      }
    >
      <FontAwesomeIcon icon={faBars} />
    </ToggleNavigationButton>
  </StyledContainer>
)

export default Navbar
