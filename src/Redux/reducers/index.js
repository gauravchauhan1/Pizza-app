import { combineReducers } from "redux";
import { CartReducer, productReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    cart:CartReducer
})