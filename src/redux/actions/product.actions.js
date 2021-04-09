import api from "../api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";

const productActions = {};

productActions.getAllProducts = (keywords = "", page = 1, cat) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    let url = `/product?search=${keywords}&page=${page}`;
    if (cat) {
      url = url + `&category=${cat}`;
    }
    const { data } = await api.get(url);
    
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data.data,
    });
    console.log("products data", data.data)
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

productActions.getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
    const { data } = await api.get(`/product/${id}`);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

productActions.addToCart = (cart) => async (dispatch) => {
  try {
    console.log(cart);
    dispatch({ type: types.ADD_TO_CART_REQUEST });
    const { data } = await api.put(`/user/cart`, cart);
    dispatch({
      type: types.ADD_TO_CART_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.ADD_TO_CART_FAIL,
      payload: error.message,
    });
  }
};

productActions.removeFromCart = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: types.REMOVE_FROM_CART_REQUEST });
    const { data } = await api.delete(`/user/cart/delete`, id);
    dispatch({
      type: types.REMOVE_FROM_CART_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.REMOVE_FROM_CART_FAIL,
      payload: error.message,
    });
  }
};

productActions.createOrder = ( products, checkout, deliveryFee, status, total ) => async (dispatch) => {
  try {
    console.log("list of stuffs", products, checkout, deliveryFee, status, total);
    dispatch({ type: types.ADD_TO_CART_REQUEST });
    const { data } = await api.post(`/order`, {products, checkout: checkout.orderinfo, deliveryFee, status, total});
    dispatch({
      type: types.ADD_TO_CART_SUCCESS,
      payload: data.data.product,
    });
    document.location.href = "/";
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.ADD_TO_CART_FAIL,
      payload: error.message,
    });
  }
};

export default productActions;