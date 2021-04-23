import Link from "next/link"

import StyledContainer from "./styles"

const SignUpPage: React.FC = () => {
  return (
    <StyledContainer>
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <div className="page-title">Sign Up</div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">E-mail</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" />
        <input type="submit" value="SIGN UP" />
      </form>
      <p>
        Já possui conta?
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        (Entre)
      </p>
    </StyledContainer>
  )
}

export default SignUpPage
