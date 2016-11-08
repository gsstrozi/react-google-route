import {HIDE_ROUTE} from '../constants/constants'

const Reducer = (state = {
  onHide: true,
  routes: [],
}, action) => {
  switch (action.type) {
    case HIDE_ROUTE:
      return {
        ...state,
        onHide: action.onHide
      }
    case 'SET_ROUTES':
      return {
        ...state,
        routes: action.routes
      }

    default:
      return state
  }
}

export default Reducer
