import { SEARCH_PRODUCT } from "../actions/search-action"

const initialState = {
    search_value:  "",
}



export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                search_value: action.payload
            }

        default:
            return state
    }
}