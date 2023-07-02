import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    Poster: "",
    Title: "",
    Year: "",
    imdbID: ""
}

export const Favourites = createSlice({
    name : "favourites",
    initialState : {value : initialState},
    reducers : {
        addFavourites: (state,action) => {
            state.value = action.payload
        },
        delFavourites: (state) => {
            state.value = initialState
        }
    }
})

export const favouritesReducer = Favourites.reducer;
export const { addFavourites,delFavourites } = Favourites.actions;