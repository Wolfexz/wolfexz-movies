import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";

import { MovieSimple } from '../types';
import { useSearchParams } from "react-router-dom";

export const MoviesGrid = () => {

  const [movies, setMovies] = useState<MovieSimple[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // const query: URLSearchParams = useQuery();
  // const search: string | null = query.get("search");

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search
    ? `/search/movie?query=${search}`
    : "/discover/movie"
    get(searchURL).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    })
  }, [search])
  
  if (isLoading) {
    return <Spinner />
  }

  if(!movies.length) {
    return <h1 className="text-white text-center text-2xl font-bold mt-5">No hay películas</h1>
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-10 lg:p-10 justify-center">
      { movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}
