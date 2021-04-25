import { Dispatch, SetStateAction } from "react"

export const handleToggleNavigation = (
  isNavigationOpen: boolean,
  setIsNavigationOpen: Dispatch<SetStateAction<boolean>>
): void => { 
  setIsNavigationOpen(!isNavigationOpen)
}

export const handleCloseNavigation = (
  setIsNavigationOpen: Dispatch<SetStateAction<boolean>>
): void => { 
  setIsNavigationOpen(false)
}
