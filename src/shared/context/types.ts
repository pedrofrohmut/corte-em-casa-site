export type State = {
  navigation: {
    isOpen: boolean
  }
}

export type Action = { type: "CLOSE_NAVIGATION" } | { type: "TOOGLE_NAVIGATION" }

export type Dispatch = (action: Action) => void

export type AppContextType = {
  state: State
  dispatch: Dispatch
}
