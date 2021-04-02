import * as types from "../constants/route.constants";
const routeActions = {};

routeActions.redirect = (link) => ({ type: types.SET_REDIRECT_TO, payload: link });
routeActions.removeRedirectTo = () => ({
  type: types.REMOVE_REDIRECT_TO,
  payload: null,
});

export default routeActions;
