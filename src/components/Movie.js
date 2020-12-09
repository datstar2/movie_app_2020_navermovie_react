import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ code, summary, actors, director, poster, star, title }) => {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { code, title, star, director, actors, summary },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__star">평점 : {star}</h5>
          <h4 className="movie__director">감독 : {director}</h4>
          <span className="movie__actor">배우 : </span>
          {actors.map((actor) => {
            return <span className="movie__actor">{actor}, </span>;
          })}
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
