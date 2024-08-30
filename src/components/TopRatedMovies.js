import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { TOP_RATED_MOVIES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const TopRatedMovies = () => {
  const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL);
    const json = await data.json();
    console.log(json);
    setTopRatedMoviesList(json?.results);
  };

  return topRatedMoviesList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex flex-wrap bg-slate-800">
        {topRatedMoviesList.map((movie) => (
          <Link key={movie?.id} to={"/movie-details/" + movie?.id}>
            <MovieCard movieData={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
