import "./App.css";
import FavouriteMovies from "./modules/favouritemovies";
import { Routes, Route } from "react-router-dom";
import Main from "./modules/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<FavouriteMovies />} />
      </Routes>
    </div>
  );
}

export default App;
