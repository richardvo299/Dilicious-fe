import * as types from "../constants/product.constants";

const initialState = {
  loading: true,
  products: [],
  totalPage: 1,
  deletedProducts: [],
  selectedProduct: { images: [{}] },
  cart: [],
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
    case types.GET_SINGLE_PRODUCT_REQUEST:
    case types.ADD_TO_CART_REQUEST:
    case types.REMOVE_FROM_CART_REQUEST:
    case types.CREATE_ORDER_REQUEST:
    // case types.EDIT_PRODUCT_REQUEST:
    // case types.DELETE_PRODUCT_REQUEST:
    // case types.GET_DELETED_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCTS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        products: payload.products,
        pageCount: payload.totalPages,
        loading: false,
      };
    // case types.GET_DELETED_PRODUCTS_SUCCESS:
    //   return { ...state, deletedProducts: payload, loading: false };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: payload.product, loading: false };
    case types.ADD_TO_CART_SUCCESS:
    case types.REMOVE_FROM_CART_SUCCESS:
      return { ...state, cart: payload.cart, loading: false };
    case types.CREATE_ORDER_REQUEST:
      return {}
    // case types.DELETE_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     products: state.products.filter((p) => p._id !== payload),
    //     loading: false,
    //   };
    // case types.EDIT_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     products: state.products.map((p) => {
    //       if (p._id === payload._id) return payload;
    //       else return p;
    //     }),
    //     loading: false,
    //   };

    case types.GET_PRODUCTS_FAIL:
    case types.GET_SINGLE_PRODUCT_FAIL:
    case types.ADD_TO_CART_FAIL:
    case types.REMOVE_FROM_CART_FAIL:
    case types.CREATE_ORDER_FAIL:
    // case types.DELETE_PRODUCT_FAIL:
    // case types.GET_DELETED_PRODUCTS_FAIL:
    // case types.EDIT_PRODUCT_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default productReducer;