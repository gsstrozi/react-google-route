import {HIDE_ROUTE} from '../constants/constants'

const Reducer = (state, action) => {
  switch (action.type) {
    case HIDE_ROUTE:
      return {
        ...state,
        onHide: action.onHide
      }
    default:
      return state
  }
}

export default Reducer
