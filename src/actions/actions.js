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

export const setPlaceSelected = (placeSelected) => ({
  type: SET_PLACE,
  placeSelected
})

export const setPlaceOptions = (placeOptions) => ({
  type: SET_PLACE_OPTIONS,
  placeOptions
})

export const setPlaceSelected_To = (placeSelected_To) => ({
  type: SET_PLACE_TO,
  placeSelected_To
})

export const setPlaceOptions_To = (placeOptions_To) => ({
  type: SET_PLACE_OPTIONS_TO,
  placeOptions_To
})
