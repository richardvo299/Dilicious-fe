import api from "../api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import authActions from "./auth.actions";

const productActions = {};

const url=process.env.REACT_APP_BACKEND_API;

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
    setTimeout(() => {dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data.data,
    })}, 2000)
    ;
    // console.log("products data", data.data)
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

productActions.createProduct = (name, description, price, size, images, options, toppings, categories, sold ) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST });
    const { data } = await api.post("/product/add", {
      name, description, price, size, images, options, toppings, categories, sold
    });
    dispatch({ type: types.CREATE_PRODUCT_SUCCESS, payload: data.data });
    toast.success("Product created");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.CREATE_PRODUCT_FAIL,
      payload: error.errors.message,
    })
  }
}

productActions.createOrder = ( products, checkout, deliveryFee, status, total ) => async (dispatch) => {
  try {
    // console.log("list of stuffs", products, checkout, deliveryFee, status, total);
    dispatch({ type: types.CREATE_ORDER_REQUEST });
    const { data } = await api.post(`/order`, {products, checkout: checkout.orderinfo, deliveryFee, status, total});
    dispatch({
      type: types.CREATE_ORDER_SUCCESS,
      payload: data.data.user,
    });
    // console.log("successfully created order")
    document.location.href = "/thanks";
    dispatch(productActions.getAllOrders());
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.CREATE_ORDER_FAIL,
      payload: error.message,
    });
    toast.error(`Please recheck the infos`);
  }
};

productActions.getAllOrders = () => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_ORDER_REQUEST });
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
      body: null
  };
    // const res = await api.get("/user/me");
    const data = await fetch(`${url}api/order`, requestOptions)
    const res = await data.json()
    console.log("response", res)
    
    // const { data } = await api.get(`/order`);
    dispatch({
      type: types.GET_ORDER_SUCCESS,
      payload: res.data,
    });
    // console.log("Orders data", data.data);
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_ORDER_FAIL, payload: error.message });
  }
};

export default productActions;