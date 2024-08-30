import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { UPCOMING_MOVIES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const UpcomingMovies = () => {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL);
    const json = await data.json();
    setUpcomingMoviesList(json?.results);
  };

  return upcomingMoviesList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex flex-wrap bg-slate-800">
        {upcomingMoviesList.map((movie) => (
          <Link key={movie?.id} to={"/movie-details/" + movie?.id}>
            <MovieCard movieData={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
