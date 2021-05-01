import { ReactElement, useEffect } from "react"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import LocalStorageKeys from "../shared/constants/local-storage-keys"
import Href from "../shared/constants/href"

import StyledContainer from "./preload/styles"

const PreloadPage = (): ReactElement => {
  const router = useRouter()

  // Executes only in the client-side
  useEffect(() => {
    const authenticationToken = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)
    if (!authenticationToken) {
      setTimeout(() => {
        router.replace(Href.SIGNIN_HREF)
      }, 1900)
    }
  }, [])

  return (
    <StyledContainer>
      <img src="/images/barber.svg" alt="Logo" className="barber-logo" />
      <p>Checando autenticação...</p>
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </StyledContainer>
  )
}

export default PreloadPage
