import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: var(--mainBlue1);
  padding: 4rem 2rem;
  flex: 1;

  form {
    width: 100%;
    margin-bottom: 5rem;
  }
  
  label {
    display: inline-block;
    font-size: 1.1rem;
    color: var(--mainBlue4);
    padding-left: 1.5rem;
    padding-bottom: 0.3rem;
  }

  input {
    display: block;
    width: 100%;
    border-radius: 3rem;
  }

  input[type="email"],
  input[type="password"] {
    background-color: var(--mainBlue-2);
    margin-bottom: 2rem;
    padding: 1.2rem 1.8rem;
    border: 1px solid var(--grey-2);
    font-size: 1.4rem;
  }

  input[type="submit"] {
    border: 0;
    color: var(--fullWhite);
    background-color: var(--mainBlue2);
    padding: 1.2rem 0;
    font-size: 1.2rem;
    margin-top: 3.5rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--mainBlue4);
    margin-bottom: 2rem;
  }

  p a {
    color: var(--mainBlue4);
    margin: 0 0.4rem;
    font-weight: 600;
    position: relative;
  }

  p a::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--mainBlue4);
  }

`

export default StyledContainer
