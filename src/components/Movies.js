import React from "react";
import { movies } from "../data";

function Movies() {

  const listMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h1>{movie.title}</h1>
        <h2>{`Runtime: ${movie.time} minutes`}</h2>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
}

export default Movies;
