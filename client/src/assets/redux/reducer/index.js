import { combineReducers } from "redux";
import { cardReducer } from "../reducer/homePageCard.reducer";
import { favoritesReducer } from "../reducer/favorite.reducer";

export const rootReducer = combineReducers({
  cardReducer,
  favoritesReducer,
});
