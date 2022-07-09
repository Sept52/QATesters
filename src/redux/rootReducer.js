import { combineReducers } from "redux";
import { getInfoReducer } from './getInfoReducer.js';

export const rootReducer = combineReducers({
    getInfoReducer,
})