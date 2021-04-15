import * as types from "../constants/auth.constants";

const isAuthenticated = !!localStorage.getItem("accessToken");
// console.log("isAuth", isAuthenticated);
const initialState = {
  user: {},
  isAuthenticated,
  loading: false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
      return { ...state, loading: true };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        loading: false,
        user: payload.user,
        // accessToken: payload.accessToken,
        isAuthenticated: true,
      };
    case types.LOGIN_USER_FAIL:
    case types.GET_CURRENT_USER_FAILURE:  
      return { ...state, loading: false};
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: false,

      };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    case types.LOGOUT_USER:
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;