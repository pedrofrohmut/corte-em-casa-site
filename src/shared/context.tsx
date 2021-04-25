import { createContext, useReducer } from "react"

import { CLOSE_NAVIGATION, TOOGLE_NAVIGATION } from "./constants/action-types"

type State = {
  navigation: {
    isOpen: boolean
  }
}

type Action = { type: "CLOSE_NAVIGATION" } | { type: "TOOGLE_NAVIGATION" }

type Reducer = (state: State, action: Action) => State

type Dispatch = (action: Action) => void

type AppContextType = {
  state: State
  dispatch: Dispatch
}

const reducer: Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CLOSE_NAVIGATION:
      return { ...state, navigation: { isOpen: false } }
    case TOOGLE_NAVIGATION:
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

// eslint-disable-next-line
const initialDispatch = () => {}

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: initialDispatch
})

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
