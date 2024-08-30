import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { POPULAR_MOVIES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(POPULAR_MOVIES_URL);
    const json = await data.json();
    setPopularMovieList(json?.results);
  };

  return popularMovieList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex flex-wrap bg-slate-800 min-h-screen">
        {popularMovieList.map((movie) => (
          <Link key={movie?.id} to={"/movie-details/" + movie?.id}>
            <MovieCard movieData={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
