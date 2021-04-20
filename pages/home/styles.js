import styled from "styled-components"

const StyledContainer = styled.div`
  color: var(--grey1);
  padding-top: 1rem;

  h1 {
    padding-left: 1rem;
    margin-bottom: 1.6rem;
  }

  main {
    margin-bottom: 2rem;
  }

  .content-block {
    margin-bottom: 2.8rem;
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
    opacity: 0.95;
  }

  @media (min-width: 481px) {
    button {
      background-color: transparent;
      color: var(--mainBlue1);
      font-weight: 600;
      letter-spacing: 0.5px;
      font-size: 1.4rem;
      padding: 0 0.5rem;
      text-align: left;
    }

    span {
      position: relative;
    }

    button span::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--mainBlue1);
    }
  }

  @media (min-width: 721px) {
    display: flex;
    flex-direction: column;
    max-width: 720px;
    margin: 0 auto;
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
