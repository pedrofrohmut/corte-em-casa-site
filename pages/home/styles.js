import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: var(--fullWhite);
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

  a {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    background-color: var(--mainBlue1);
    color: var(--fullWhite);
    opacity: 0.9;
    border: 0;
    border-radius: 0.4rem;
    outline: none;

    &:hover,
    &:focus {
      background-color: var(--mainBlue3);
    }
  }

  @media (min-width: 481px) {
    a {
      display: inline-block;
      padding: 0;
      margin-left: 0.5rem;
      position: relative;
      text-align: left;
      background-color: transparent;
      color: var(--mainBlue1);
      font-weight: 600;
      font-size: 1.4rem;
      outline: none;
      opacity: 0.7;

      &:hover,
      &:focus {
        opacity: 1;
        background-color: transparent;
      }

      &:hover::after,
      &:focus::after {
        display: block;
      }
    }

    a::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: var(--mainBlue1);
      display: none;
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
