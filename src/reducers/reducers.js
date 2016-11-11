import {SET_ROUTES, SET_SEARCHING, SET_KM, SET_FUELAMT, SET_REQUESTERROR} from '../constants/constants';

const Reducer = (state = {
  searching: false,
  routes: [],
}, action) => {
  switch (action.type) {
    case SET_ROUTES:
      return {
        ...state,
        routes: action.routes
      }
    case SET_SEARCHING:
      return {
        ...state,
        searching: action.searching
      }
    case SET_KM:
      return {
        ...state,
        km: action.km
      }
    case SET_FUELAMT:
      return {
        ...state,
        fuelamt: action.fuelamt
      }
    case SET_REQUESTERROR:
      return {
        ...state,
        requesterror: action.requesterror
      }
    default:
      return state
  }
}

export default Reducer
