import Link from "next/link"
import { ReactElement } from "react"

import StyledContainer from "./styles"

const SignUpPage = (): ReactElement => (
  <StyledContainer>
    <div className="container">
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <form>
        <label htmlFor="name">Nome completo</label>
        <input type="text" />
        <label htmlFor="email">Endereço de e-mail</label>
        <input type="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" />
        <label htmlFor="confirmPassword">Repetir senha</label>
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
