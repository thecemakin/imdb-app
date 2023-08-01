import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
};

export const Favourites = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addFavourites: (state, action) => {
        
        state.movie.push(action.payload.movie)
        
    },
    delFavourites: (state, action) => {
        const sameId = state.movie.filter(item => item.id == action.payload.imdbID)

    },
  },
});

export const favouritesReducer = Favourites.reducer;
export const { addFavourites, delFavourites } = Favourites.actions;
