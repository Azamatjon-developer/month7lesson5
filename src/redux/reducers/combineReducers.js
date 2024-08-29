import { combineReducers } from "redux";
import { productsReducer } from "./products-reducer";
import { searchReducer } from "./search-reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    search_products: searchReducer
})


export default rootReducer