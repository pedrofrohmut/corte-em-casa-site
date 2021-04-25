import Link from "next/link"

import StyledContainer from "./styles"

const SignInPage: React.FC = () => {
  return (
    <StyledContainer>
      <div className="container">
        <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
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
}

export default SignInPage
