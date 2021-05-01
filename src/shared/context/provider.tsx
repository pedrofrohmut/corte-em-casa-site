import { ReactElement, ReactNode, useReducer } from "react"
import AppContext, { initialState } from "./index"
import reducer from "./reducer"

type AppContextProviderProps = {
  children: ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export default AppContextProvider
