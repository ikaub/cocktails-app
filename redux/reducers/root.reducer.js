import {combineReducers} from "redux";
import drinksReducer from "./drinks.reducer";

const rootReducer = combineReducers({
    drinks: drinksReducer
});

export default rootReducer;
