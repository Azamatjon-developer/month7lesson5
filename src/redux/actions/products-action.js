// src/redux/actions/cartActions.js
export const ADD_PRODUCTS = 'ADD_PRODUCTS';

export const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    };
};
