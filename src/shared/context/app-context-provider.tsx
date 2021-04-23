import React, { useReducer } from "react"

import INITIAL_STATE from "./app-initial-state"
import AppContext from "./app-context"
import appReducer from "./app-reducer"

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
