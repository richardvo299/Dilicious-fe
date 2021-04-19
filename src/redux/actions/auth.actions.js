import api from "../api";
import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import routeActions from "./route.actions";
const authActions = {};

const url=process.env.REACT_APP_BACKEND_API;

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
    window.location.replace("/");
  } catch (error) {
    console.error(error);
    dispatch({ type: types.LOGIN_USER_FAIL, payload: error.message });
    toast.error(error.message);
  }
};

authActions.getCurrentUser = () => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  // if () {
  //   const bearerToken = "Bearer ";
  //   api.defaults.headers.common["authorization"] = bearerToken;
  // }
  try {
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
      body: null
  };
    // const res = await api.get("/user/me");
    const data = await fetch(`${url}api/user/me`, requestOptions)
    const res = await data.json()
    // console.log("res", res);
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data });
    // console.log("current user", res.data.data)
  } catch (error) {
    // console.log(error);
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

authActions.logout = () => async (dispatch) => {
  console.log("LOGOUT");
  delete api.defaults.headers.common["authorization"];
  localStorage.removeItem("accessToken");
  dispatch({ type: types.LOGOUT_USER, payload: null });
  window.location.replace("/");
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

authActions.addToCart = (cart) => async (dispatch) => {
  try {
    // console.log(cart);
    dispatch({ type: types.ADD_TO_CART_REQUEST });
    const { data } = await api.put(`/user/cart`, cart);
    dispatch({
      type: types.ADD_TO_CART_SUCCESS,
      payload: data.data.user,
    });
    toast.success(`Added to cart`);
    dispatch(authActions.getCurrentUser());
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.ADD_TO_CART_FAIL,
      payload: error.message,
    });
  }
};

authActions.removeFromCart = (id) => async (dispatch) => {
  try {
    // console.log(id);
    dispatch({ type: types.REMOVE_FROM_CART_REQUEST });
    const { data } = await api.put(`/user/cart/delete`, {id});
    dispatch({
      type: types.REMOVE_FROM_CART_SUCCESS,
      payload: data.data.user,
    });
    toast.success(`Item removed from cart`);
    dispatch(authActions.getCurrentUser());
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.REMOVE_FROM_CART_FAIL,
      payload: error.message,
    });
  }
};
// console.log(authActions);
export default authActions;