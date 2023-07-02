import { favouritesReducer } from "./features/favourites";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    favouritesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer
    })
}