import React from "react";
import { directors } from "../data";

function Directors() {

  const listDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors;
