import React from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { delFavourites } from "../store/features/favourites";

export default function FavouriteMovies() {
  const movie = useSelector((state) => state.favouritesReducer.value);
  const dispatch = useDispatch()

  return (
    <div>
      <Header></Header>
      <div className="d-flex flex-column col-3">
        <div className="d-flex row movie-card m-2">

          {/* {
            movie.Poster !== "N/A" ? (<img src={movie.Poster } alt="" />) : (
                <img src="https://via.placeholder.com/700" alt="" />
            )
          } */}
          <img src={movie.Poster} alt="" />
          <div>{movie.Year}</div>
          <div>{movie.Title}</div>
          <button onClick={() => {dispatch(delFavourites())}}>Kaldir</button>
        </div>
      </div>
    </div>
  );
}
