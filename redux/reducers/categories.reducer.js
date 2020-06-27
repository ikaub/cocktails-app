import {FETCH_CATEGORIES, FILTER_CATEGORIES} from "../actions/categories.actions";

const INITIAL_STATE = {
    categories: [],
    filteredCategories: []
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                filteredCategories: action.payload
            }
        case FILTER_CATEGORIES:
            return {
                ...state,
                filteredCategories: action.payload
            }
        default:
            return state;
    }
}

export default categoriesReducer;