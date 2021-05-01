import ActionTypes from "../constants/action-types"
import { Action, State } from "./types"

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

export default reducer
