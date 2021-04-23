import { useEffect } from "react"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import { AUTH_TOKEN } from "../shared/constants/local-storage"
import { SIGNIN_HREF } from "../shared/constants/href"

import StyledContainer from "./preload/styles"

// TODO: tell with text "Redirecting to sign in...." or other option

const PreloadPage: React.FC = () => {
  const router = useRouter()

  // Executes only in the client-side
  useEffect(() => {
    const authenticationToken = localStorage.getItem(AUTH_TOKEN)
    if (!authenticationToken) {
      setTimeout(() => {
        router.replace(SIGNIN_HREF)
      }, 2500)
    }
  }, [])

  return (
    <StyledContainer>
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <p>Checking Authentication...</p>
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </StyledContainer>
  )
}

export default PreloadPage
