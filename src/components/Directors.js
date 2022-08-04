import React from "react";
import { directors } from "../data";
import {nanoid} from "nanoid"

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=>
        <div key={nanoid(5)}>
          <h1>{director.name}</h1>
          <ul>{director.movies.map(movie => 
            <li key={nanoid(5)}>{movie}</li>
            )}
          </ul>
        </div>
        )}
    </div>);
}

export default Directors;
