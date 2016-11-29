import {
  SET_ROUTES,
  SET_SEARCHING,
  SET_KM,
  SET_FUELAMT,
  SET_REQUESTERROR,
  SET_PLACE,
  SET_PLACE_OPTIONS,
  SET_PLACE_TO,
  SET_PLACE_OPTIONS_TO
 } from '../constants/constants';

const Reducer = (state = {
  searching: false,
  routes: [],
  placeSelected:""
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
    case SET_PLACE:
      return {
        ...state, placeSelected: action.placeSelected
      }
    case SET_PLACE_OPTIONS:
        return {
          ...state, placeOptions: action.placeOptions
        }
    case SET_PLACE_TO:
      return {
        ...state, placeSelected_To: action.placeSelected_To
      }
    case SET_PLACE_OPTIONS_TO:
        return {
          ...state, placeOptions_To: action.placeOptions_To
        }
    default:
      return state
  }
}

export default Reducer
