import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [movieName, setMovieName] = useState("");

  return (
    <div className="flex justify-between bg-slate-600 md:">
      <div className="ml-32 my-5 font-bold size-4 text-xl">
        <p className="text-white">
          <Link to="/">MovieDb</Link>
        </p>
      </div>
      <div className="my-5 md:my-3 sm:my-1 mr-32 md:mr-12 sm:mr-6">
        <ul className="flex text-gray-400">
          <li className="ml-4">
            <Link to="/">Popular</Link>
          </li>
          <li className="ml-4">
            <Link to="top-rated-movies">Top Rated</Link>
          </li>
          <li className="ml-4">
            <Link to="Upcoming-movies">Upcoming</Link>
          </li>
          <li className="ml-4">
            <input
              type="text"
              placeholder="Movie Name"
              value={movieName}
              className="px-2 py-1 rounded-md"
              onChange={(e) => {
                setMovieName(e.target.value);
              }}
            ></input>
          </li>
          <li className="ml-4">
            <Link
              to={`/searched-movies?query=${encodeURIComponent(movieName)}`}
            >
              <button className="text-gray-100 border rounded-md bg-slate-500 px-2 py-1">
                Search
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
