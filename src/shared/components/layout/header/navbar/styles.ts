import styled from "styled-components"

const StyledContainer = styled.div`
  --light: var(--grey-4);
  --main: var(--mainBlue3);
  background-color: var(--main);
  position: relative;
  opacity: 0.9;

  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  @media (min-width: 721px) {
    display: flex;
    flex-direction: row;
  }
`

export const Logo = styled.div`
  display: block;

  a {
    display: inline-block;
    padding: 0.8rem 1.2rem;
    color: var(--light);
    font-size: 1.3rem;
  }

  @media (min-width: 721px) {
    display: inline-block;
    width: 240px;
  }
`

interface NavigationProps {
  isNavigationOpen: boolean
}

export const Navigation = styled.nav<NavigationProps>`
  display: ${props => (props.isNavigationOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 999;

  ul {
    background-color: var(--main);
    border-top: 3px solid var(--light);
  }

  li {
    border-bottom: 3px solid var(--light);
  }

  a {
    padding: 1rem 0 1rem 1rem;
    display: block;
    text-transform: uppercase;
    color: var(--light);
  }

  @media (min-width: 721px) {
    display: flex;
    position: relative;
    align-items: center;

    ul {
      border: 0;
    }

    li {
      display: inline;
      border: 0;
    }

    a {
      display: inline;
      text-transform: none;
    }
  }
`

export const ToggleNavigationButton = styled.div`
  color: var(--light);
  font-size: 2rem;
  padding: 0.3rem 1rem;

  @media (min-width: 721px) {
    display: none;
  }
`

export default StyledContainer
