import React from "react";
import { actors } from "../data";

function Actors() {
  
  const listActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map((movie) =>{
            return (
              <li key = {movie}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  });
  
  return (
    <div>
      <h1> Actors Page</h1>
      {listActors}
    </div>
  );
}

export default Actors;
