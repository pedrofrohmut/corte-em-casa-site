import { createContext, ReactElement, ReactNode, useReducer } from "react"

import ActionTypes from "./constants/action-types"

type State = {
  navigation: {
    isOpen: boolean
  }
}

type Action = { type: "CLOSE_NAVIGATION" } | { type: "TOOGLE_NAVIGATION" }

type Dispatch = (action: Action) => void

type AppContextType = {
  state: State
  dispatch: Dispatch
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CLOSE_NAVIGATION:
      return { ...state, navigation: { isOpen: false } }
    case ActionTypes.TOOGLE_NAVIGATION:
      return { ...state, navigation: { isOpen: !state.navigation.isOpen } }
    default:
      return state
  }
}

const initialState: State = {
  navigation: {
    isOpen: false
  }
}

const initialDispatch = () => undefined

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: initialDispatch
})

type AppContextProviderProps = {
  children: ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export default AppContextProvider
