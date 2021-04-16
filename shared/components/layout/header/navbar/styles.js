import styled from "styled-components"

const StyledContainer = styled.div`
  --light: var(--grey-3);
  --main: var(--mainBlue4);
  background-color: var(--main);
  position: relative;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
  }
`

export const Logo = styled.div`
  display: none;

  a {
    display: inline-block;
    padding: 0.8rem 1.2rem;
    color: var(--light);
    font-size: 1.3rem;
  }

  @media (min-width: 720px) {
    display: inline-block;
    width: 240px;
  }
`

export const Navigation = styled.nav`
  display: ${props => (props.isOpen ? "block" : "none")};
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

  @media (min-width: 720px) {
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

  @media (min-width: 720px) {
    display: none;
  }
`

export default StyledContainer
