export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const searchProduct = (product) => {
    return {
        type: SEARCH_PRODUCT,
        payload: product,
    };
}