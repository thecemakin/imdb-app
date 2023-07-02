import React from "react";
import "./moviecard.css";
import { useDispatch } from "react-redux";
import { addFavourites } from "../store/features/favourites";

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch()
  return (
    <div Id className="d-flex flex-column col-3">
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
        <button onClick={() => {dispatch(addFavourites({Poster : movie.Poster, Title : movie.Title, Year : movie.Year, imdbID : movie.imdbID}))}}>Favorilere ekle</button>
      </div>
    </div>
  );
};

export default MovieCard;
