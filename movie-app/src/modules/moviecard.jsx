import React from "react";
import "./moviecard.css";
import { useDispatch } from "react-redux";
import { addFavourites } from "../store/features/favourites";
import Fav from "../../src/assets/fav-add.png";

const MovieCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="container d-flex col-lg-12 col-md-6 col-sm-3 row">
      {data?.map((movie, index) => (
        <div key={index} className="d-flex flex-column col-3">
          <div className="d-flex row movie-card m-2">
            <img
              className="py-1 poster"
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/700"
              }
            />
            <div>{movie.Year}</div>
            <div>{movie.Title}</div>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                dispatch(addFavourites({ movie }));
              }}
            >
              Favorilere ekle
            </button>
            <img className="fav-icon" src={Fav} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
