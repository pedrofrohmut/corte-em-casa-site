import { ReactElement, useContext } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import ActionTypes from "../../../../constants/action-types"

import { AppContext } from "../../../../context"

import StyledContainer, {
  Logo,
  Navigation,
  ToggleNavigationButton
} from "./styles"

const Navbar = (): ReactElement => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <StyledContainer>
      <Logo>
        <Link href="/">
          <a>Corte em Casa</a>
        </Link>
      </Logo>
      <Navigation isNavigationOpen={state.navigation.isOpen}>
        <ul>
          <li onClick={() => dispatch({ type: ActionTypes.CLOSE_NAVIGATION })}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={() => dispatch({ type: ActionTypes.CLOSE_NAVIGATION })}>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </li>
          <li onClick={() => dispatch({ type: ActionTypes.CLOSE_NAVIGATION })}>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </Navigation>
      <ToggleNavigationButton
        onClick={() => dispatch({ type: ActionTypes.TOOGLE_NAVIGATION })}
      >
        <FontAwesomeIcon icon={faBars} />
      </ToggleNavigationButton>
    </StyledContainer>
  )
}

export default Navbar
