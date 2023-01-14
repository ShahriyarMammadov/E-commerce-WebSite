import { combineReducers } from "redux";
import { cardReducer } from "../reducer/homePageCard.reducer";

export const rootReducer = combineReducers({
    cardReducer,
});