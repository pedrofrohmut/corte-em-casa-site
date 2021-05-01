import Link from "next/link"
import { ReactElement } from "react"

import StyledContainer from "./styles"

const SignUpPage = (): ReactElement => (
  <StyledContainer>
    <div className="container">
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">E-mail</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já possui conta?
        <Link href="/signin">
          <a>Entrar</a>
        </Link>
      </p>
    </div>
  </StyledContainer>
)

export default SignUpPage
