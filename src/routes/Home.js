import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [movieState, setMovieState] = useState({
    isLoading: true,
    movies: [],
  });
  //[id, actors[], director, poster, star, title]
  const getMovies = async () => {
    const result = await axios.get("http://18.191.255.163:5000/movie/list");
    const movies = result.data.result;
    setMovieState({
      isLoading: false,
      movies,
    });
  };

  useEffect(() => getMovies(), []);

  return (
    <>
      <section className="container">
        {movieState.isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          movieState.movies.map((movie) => {
            return (
              <div className="movies">
                <Movie
                  key={movie._id}
                  title={movie.title}
                  actors={movie.actors}
                  director={movie.director}
                  poster={movie.poster}
                  star={movie.star}
                  summary={movie.summary}
                  code={movie.code}
                />
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

export default Home;
