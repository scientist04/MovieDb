import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";

const SearchMovie = () => {
  const [movieSearchData, setMovieSearchData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get("query");

  useEffect(() => {
    if (movieName) {
      fetchData(movieName);
    }
  }, [movieName]);

  const fetchData = async (searchData) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${encodeURIComponent(
        searchData
      )}&page=1`
    );

    const json = await data.json();
    // console.log(json);
    setMovieSearchData(json?.results || []);
  };

  return (
    <div className="">
      <div className="flex flex-wrap bg-slate-800">
        {movieSearchData.map((movie) => (
          <Link key={movie?.id} to={"/movie-details/" + movie?.id}>
            <MovieCard movieData={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
