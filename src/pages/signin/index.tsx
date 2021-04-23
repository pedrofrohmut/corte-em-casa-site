import Link from "next/link"

import StyledContainer from "./styles"

const SignInPage: React.FC = () => {
  return (
    <StyledContainer>
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <div className="page-title">Sign In</div>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <input type="submit" value="SIGN IN" />
      </form>
      <p>
        Ainda não possui conta?
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
        (Cadastre-se)
      </p>
    </StyledContainer>
  )
}

export default SignInPage
