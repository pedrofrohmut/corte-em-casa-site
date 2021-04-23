import { createContext, Dispatch } from "react"

import INITIAL_STATE from "./app-initial-state"

const AppContext = createContext(INITIAL_STATE)

export default AppContext
