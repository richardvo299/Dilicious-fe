import api from "../api";
import * as types from "../constants/category.constants";
import { toast } from "react-toastify";

const categoryActions = {};

categoryActions.getAllCategories = () => async (
  dispatch
) => {
  try {
    console.log("you're here");
    dispatch({ type: types.GET_CATEGORIES_REQUEST });
    const { data } = await api.get(`/category`);
    dispatch({
      type: types.GET_CATEGORIES_SUCCESS,
      payload: data.data,
    });
    console.log("categories data", data.data);
  } catch (error) {
    console.error(error);
    dispatch({ type: types.GET_CATEGORIES_FAIL, payload: error.errors.message });
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

export default categoryActions;