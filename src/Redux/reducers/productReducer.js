import { SET_PIZZA_PRODUCTS, SET_CART_PRODUCT, REMOVE_CART_PRODUCT } from "../constants/actionType"

const initialState = {
    pizzaProducts : [],
    
}
const cartInitialState = {
    selectedProducts : []
}
export const productReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case SET_PIZZA_PRODUCTS:
            return {...state,pizzaProducts:payload};
        default:
            return state;
    }
}


export const CartReducer = (state = cartInitialState,{type,payload}) => {
    switch(type){
        case SET_CART_PRODUCT:
            const exists = state.selectedProducts.find(pizza => pizza.id===payload.id)
            if(exists){
                return {...state,selectedProducts: state.selectedProducts.map(pizza => pizza.id===payload.id?payload:pizza)}
            }
            else{
                return {...state,selectedProducts:[...state.selectedProducts,payload]}
            }
            
        case REMOVE_CART_PRODUCT:
            return {selectedProducts: state.selectedProducts.filter(pizza=> pizza.id !== payload.id)}
        default:
            return state;
    }
}