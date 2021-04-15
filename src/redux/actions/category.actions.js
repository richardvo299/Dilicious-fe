import api from "../api";
import * as types from "../constants/category.constants";
import { toast } from "react-toastify";

const categoryActions = {};

categoryActions.getAllCategories = () => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_CATEGORIES_REQUEST });
    const { data } = await api.get(`/category`);
    dispatch({
      type: types.GET_CATEGORIES_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_CATEGORIES_FAIL, payload: error.message });
  }
};

categoryActions.getSingleCategory = (id) => async (dispatch) => {
    try {
      dispatch({ type: types.GET_SINGLE_CATEGORY_REQUEST });
      const { data } = await api.get(`/category/${id}`);
      dispatch({
        type: types.GET_SINGLE_CATEGORY_SUCCESS,
        payload: data.data.category,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: types.GET_SINGLE_CATEGORY_FAIL,
        payload: error.errors.message,
      });
    }
  };

categoryActions.createCategory = (name) => async (dispatch) => {
  try {
    const res = await api.post("/category/add", {
      name,
    });
    dispatch({ type: types.CREATE_CATEGORIES_SUCCESS, payload: res.data.data });
    toast.success("category created");
    dispatch(categoryActions.getAllCategories());
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.CREATE_CATEGORIES_FAIL,
      payload: error.errors.message,
    })
  }
}

categoryActions.deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_CATEGORY_REQUEST, payload: null });
  try {
    const res = await api.delete(`/category/${id}/delete`);
    // console.log("delete", res);
    dispatch({ type: types.DELETE_CATEGORY_SUCCESS, payload: res.data.data });
    toast.success("Category deleted");
    dispatch(categoryActions.getAllCategories());
  } catch (error) {
    dispatch({ type: types.DELETE_CATEGORY_FAIL, payload: error });
  }
};

export default categoryActions;