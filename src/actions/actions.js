import {
  SET_ROUTES,
  SET_SEARCHING,
  SET_KM,
  SET_FUELAMT,
  SET_REQUESTERROR,
  SET_VALUE,
  SET_SUGGESTIONS
} from '../constants/constants';

export const setRoutes = (routes) => ({
  type: SET_ROUTES,
  routes,
})

export const setSearching = (searching) => ({
  type: SET_SEARCHING,
  searching,
})

export const setKM = (km) => ({
  type: SET_KM,
  km,
})

export const setFuelAmt = (fuelamt) => ({
  type: SET_FUELAMT,
  fuelamt,
})

export const setRequestError = (requesterror) => ({
  type: SET_REQUESTERROR,
  requesterror
})

export const setValue = (value) => ({
  type: SET_VALUE,
  value
})

export const setSuggestions = (suggestions) => ({
  type: SET_SUGGESTIONS,
  suggestions
})
