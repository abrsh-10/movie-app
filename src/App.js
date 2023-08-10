import { useEffect, useState } from "react";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCard from "./movieCard";

//a65af3c1;
const API_URL = "https://www.omdbapi.com?apikey=a65af3c1";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  ky;
  useEffect(() => {
    searchMovie("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>
        A<sup>+</sup> movies
      </h1>
      <div className="search">
        <input
          placeholder="search movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovie(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">no movies found</div>
      )}
    </div>
  );
}

export default App;
