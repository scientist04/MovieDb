import {} from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { movieData } = props;

  const { poster_path, title, vote_average } = movieData;

  return (
    <div className="w-52 h-60  justify-between ml-20 mt-10 mb-40  text-white">
      <div className="text-center">
        <img className="rounded-lg hover:" src={IMAGE_URL + poster_path}></img>
        <h1 className="mt-2">{title}</h1>
        <p className="">Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
