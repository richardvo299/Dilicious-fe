import api from "../api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";

const productActions = {};

productActions.getAllProducts = (keywords = "", page = 1) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    const { data } = await api.get(`/product?search=${keywords}&page=${page}`);
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data.data,
    });
    console.log("products data", data.data)
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_PRODUCTS_FAIL, payload: error.errors.message });
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
      payload: error.errors.message,
    });
  }
};

export default productActions;