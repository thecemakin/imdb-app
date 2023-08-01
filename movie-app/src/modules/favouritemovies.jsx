import React from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { delFavourites } from "../store/features/favourites";

export default function FavouriteMovies() {
  const movies = useSelector((state) => state.favouritesReducer);
  const dispatch = useDispatch();

  return (
    <div className="favourites bg-black">
      <Header />
      <div className="d-flex justify-content-center container ">
        <div className="d-flex col-lg-12 col-md-6 col-sm-3 row">
          {movies.movie.map((item, index) => (
            <div key={index} className="d-flex flex-column col-3">
              <div className="d-flex row movie-card m-2">
                {/* {
            movie.Poster !== "N/A" ? (<img src={movie.Poster } alt="" />) : (
                <img src="https://via.placeholder.com/700" alt="" />
            )
          } */}
                <img src={item.Poster} alt="" />
                <div>{item.Year}</div>
                <div>{item.Title}</div>
                <button
                  onClick={() => {
                    dispatch(delFavourites(item.imdbID));
                  }}
                >
                  Kaldir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
