import { useEffect, useState } from "react";
import "./main.css";
import Header from "./header";
import SearchIcon from "../assets/search.png";
import MovieCard from "./moviecard";
import CarouselApp from "./carouselapp";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=94dacbe";

export default function Main() {

  const [movies, setMovie] = useState();
  const [search, setSearch] = useState();
  const [carouselData, setCarouselData] = useState([]);

  const searchMovies = async (title) => {
    
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    // console.log(data.Search);
    setMovie(data.Search);
    setCarouselData(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <div className="main">
      <Header />
      {carouselData?.length > 0 ? (
        <CarouselApp data={carouselData} />
      ) : (
        <div>no data</div>
      )}
      <div className="search-bar d-flex justify-content-center">
        <div className="bar-wrapper">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies"
            value={search}
          />
          <img
            className="searchIcon"
            onClick={() => searchMovies(search)}
            src={SearchIcon}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="d-flex justify-content-center">
              <MovieCard data ={movies} />
        </div>
      ) : (
        <h2>No movie yet</h2>
      )}
    </div>
  );
}
