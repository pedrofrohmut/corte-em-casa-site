import { createContext } from "react"
import { AppContextType, State } from "./types"

export const initialState: State = {
  navigation: {
    isOpen: false
  }
}

export const initialDispatch = (): void => undefined

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: initialDispatch
})

export default AppContext
