import api from "../api";
import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import routeActions from "./route.actions";
const authActions = {};

authActions.login = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    const name = res.data.data.user.name;
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${name}`);
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;

    localStorage.setItem("accessToken", res.data.data.accessToken);
  } catch (error) {
    console.error(error);
    dispatch({ type: types.LOGIN_USER_FAIL, payload: error.errors.message });
    toast.error(error.errors.message);
  }
};

authActions.getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

authActions.logout = () => async (dispatch) => {
  console.log("LOGOUT");
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT_USER, payload: null });
  toast.success(`Thank you`);
};

authActions.register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/user", {
      name,
      email,
      password,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    toast.success(`Thank you for your registration, ${name}!`);
    dispatch(routeActions.redirect("/auth"));
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
}
console.log(authActions);
export default authActions;