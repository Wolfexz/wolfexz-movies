import { FC } from "react";
import { Link } from "react-router-dom";
import { MovieSimple } from "../types";

interface Props {
  movie: MovieSimple;
}

export const MovieCard: FC<Props> = ({ movie }): JSX.Element => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  const votes = movie.vote_average;

  return (
    <li className="text-center">
      <Link to={`/movies/${movie.id}`}>
        <div className="relative">
          <img
            className="rounded-xl inline-block mb-1 hover:scale-[1.02] duration-300"
            width={230}
            height={345}
            src={imageUrl}
            alt={movie.title}
          />
          <div
            className={`absolute top-1 right-1 md:right-4 xl:right-2 2xl:right-6 
            ${votes <= 7 ? "bg-red-500 shadow-lg shadow-red-500" : ""}
            ${
              votes <= 8 && votes > 7
                ? "bg-yellow-500 shadow-lg shadow-yellow-500"
                : ""
            }
            ${
              votes <= 9 && votes > 8
                ? "bg-green-500 shadow-lg shadow-green-500"
                : ""
            }
          text-white font-bold px-2 py-[1px] rounded-xl shadow-lg`}
          >
            {votes}
          </div>
        </div>
        <p className="text-white text-base md:text-lg lg:text-2xl">
          {movie.title}
        </p>
      </Link>
    </li>
  );
};
