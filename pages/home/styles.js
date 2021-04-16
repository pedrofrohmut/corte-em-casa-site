import styled from "styled-components"

const StyledContainer = styled.div`
  color: var(--grey1);

  h1 {
    padding-left: 1rem;
    margin-bottom: 1.6rem;
  }

  main {
    margin-bottom: 2rem;
  }

  main div {
    margin-bottom: 2.3rem;
    padding: 0 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    text-align: justify;
    padding: 0.2rem 0.5rem;
  }

  button {
    width: 100%;
    background-color: var(--mainBlue1);
    color: var(--fullWhite);
  }
`

export const Links = styled.div`
  text-align: center;
  color: var(--mainBlue3);
  font-size: 1.1rem;

  span {
    margin: 0 0.3rem;
  }
`

export default StyledContainer
