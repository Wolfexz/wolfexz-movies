import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { MovieDetailed } from "../types";
import { get } from "../utils/httpClient";

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<MovieDetailed | null>(null);

  useEffect(() => {
    setIsLoading(true);
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setIsLoading(false);
    })
  }, [movieId]);

  if(isLoading) {
    return <Spinner />
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  return (
    <div className="text-white flex flex-wrap justify-center lg:gap-5">
      <img 
        className="rounded-xl w-80 md:w-7/12 lg:w-96 lg:h-[550px] m-4"
        src={imageUrl} 
        alt={movie?.title} 
      />
      <div className="w-80 md:w-7/12 lg:w-96 m-4 text-2xl flex flex-col gap-5">
        <p className="mt-0">
          <strong>Title:</strong> {movie?.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie?.genres.map(genre => genre.name).join(", ")}
        </p>
        <p>
          <strong>Overview:</strong> {movie?.overview}
        </p>
      </div>
    </div>
  )
}
