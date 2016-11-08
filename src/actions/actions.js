import {HIDE_ROUTE} from '../constants/constants';

export const setOnHide = (onHide) => ({
  type: HIDE_ROUTE,
  onHide
})

export const setRoutes = (routes) => ({
  type: 'SET_ROUTES',
  routes,
})
