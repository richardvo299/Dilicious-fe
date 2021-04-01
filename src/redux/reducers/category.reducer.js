import * as types from "../constants/category.constants";

const initialState = {
  loading: true,
  categories: [],
  deletedCategories: [],
  selectedCategory: {},
};
const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORIES_REQUEST:
    case types.GET_SINGLE_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        loading: false,
      };

    case types.GET_SINGLE_CATEGORY_SUCCESS:
      return { ...state, selectedCategory: payload, loading: false };

    case types.GET_CATEGORIES_FAIL:
    case types.GET_SINGLE_CATEGORY_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default categoryReducer;