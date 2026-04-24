import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
//temp
export default function MovieList({ data, isLoading, error, isError }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error.message}</h1>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.results?.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
}
