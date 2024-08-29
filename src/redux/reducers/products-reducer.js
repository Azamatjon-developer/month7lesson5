import { ADD_PRODUCTS } from "../actions/products-action";
const initialState = {
    all_products: [],
};

export const productsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                all_products: action.payload,
            };
        default:
            return state;
    }
};
