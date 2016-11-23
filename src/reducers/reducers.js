import {
  SET_ROUTES,
  SET_SEARCHING,
  SET_KM,
  SET_FUELAMT,
  SET_REQUESTERROR,
  SET_VALUE,
  SET_SUGGESTIONS} from '../constants/constants';

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
    case SET_VALUE:
    console.log("AQUI - VALUE");

      return {
        ...state,
        value: action.value
      }
    case SET_SUGGESTIONS:
    console.log("AQUI - SUGG");
      return {
        ...state,
        suggestions: action.suggestions
      }
    default:
      return state
  }
}

export default Reducer
