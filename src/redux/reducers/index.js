import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";
import routeReducer from "./route.reducer";

export default combineReducers({
    product: productReducer,
    auth: authReducer,
    route: routeReducer,
});