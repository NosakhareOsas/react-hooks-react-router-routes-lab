import React from "react";
import { actors } from "../data";
import {nanoid} from "nanoid"

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=>
        <div key={nanoid(5)}>
          <h1>{actor.name}</h1>
          <ul>{actor.movies.map(movie =>
            <li key={nanoid(5)}>{movie}</li>
            )}
          </ul>
        </div>)}
    </div>
    );
}

export default Actors;
