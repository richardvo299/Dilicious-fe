import * as types from "../constants/auth.constants";

const isAuthenticated = !!localStorage.getItem("accessToken");
const initialState = {
  user: {},
  isAuthenticated,
  loading: false,
  accessToken: localStorage.getItem("accessToken"),
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
        accessToken: payload.accessToken,
        isAuthenticated: true,
      };
    case types.LOGIN_USER_FAIL:
    case types.GET_CURRENT_USER_FAILURE:  
      return { ...state, loading: false, isAuthenticated: false };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: false,
        isAuthenticated: true,
      };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    case types.LOGOUT_USER:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;