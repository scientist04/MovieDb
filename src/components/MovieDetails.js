import { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/constants";
import CastDetails from "./CastDetails";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetailsList, setMovieDetailsList] = useState([]);
  const [castDetailsList, setCastDetailsList] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US"
    );
    const json = await data.json();
    console.log(json);
    setMovieDetailsList(json);
  };

  useEffect(() => {
    fetchDataCast();
  }, []);

  const fetchDataCast = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US"
    );
    const json = await data.json();
    console.log(json?.cast);
    setCastDetailsList(json?.cast);
  };

  if (movieDetailsList === 0) return <Shimmer />;

  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    runtime,
  } = movieDetailsList;

  return (
    <div className="bg-slate-800">
      <div className="relative inline-flex place-items-start w-full">
        <img
          className="w-11/12 h-[540px] ml-16 mr-16 place-items-center mt-5 rounded-xl"
          src={IMAGE_URL + backdrop_path}
        ></img>
        <div className="absolute">
          <div className="flex">
            <div className="">
              <img
                className="w-40 h-56 ml-20 mt-9 rounded-lg"
                src={IMAGE_URL + poster_path}
              ></img>
            </div>
            <div className="mt-12 ml-3">
              <h1 className="text-3xl text-white font-bold mb-3">{title}</h1>
              <p className="text-2xl text-blue-700 font-semibold mb-6">
                Rating : {vote_average}
              </p>
              <p className="text-lg text-gray-400 font-bold mb-2">
                {runtime} mins{"  "}
                {movieDetailsList?.genres
                  ?.map((genre) => genre.name)
                  .join(", ")}
              </p>
              <p className="text-lg text-gray-400 font-bold mb-2">
                Release Date : {release_date}
              </p>
            </div>
          </div>
          <div>
            <h1 className="mt-8 ml-20 text-2xl font-semibold text-white mb-4">
              Overview
            </h1>
            <p className="ml-20 font-bold text-gray-400 mb-4 w-1/2">
              {overview}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="ml-5 mt-5 font-semibold text-white mb-3 text-3xl">Cast</p>
      </div>
      <div className="flex flex-wrap">
        {castDetailsList.map((cast) => (
          <CastDetails castData={cast} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
