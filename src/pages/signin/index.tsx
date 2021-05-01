import Link from "next/link"
import { ReactElement } from "react"

import StyledContainer from "./styles"

const SignInPage = (): ReactElement => (
  <StyledContainer>
    <div className="container">
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <form>
        <label htmlFor="email">Endereço de e-mail</label>
        <input type="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" />
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Ainda não possui conta?
        <Link href="/signup">
          <a>Cadastre-se</a>
        </Link>
      </p>
    </div>
  </StyledContainer>
)

export default SignInPage
