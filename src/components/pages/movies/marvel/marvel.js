import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import MovieService from "../../../../services/movieService";

import './marvel.scss';


const Marvel = () => {

  const url = 'https://image.tmdb.org/t/p/w500/';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieService = new MovieService();

    movieService
      .getMarvelMovies(1)
      .then((data) => {
        setMovies(data.items)
      })
  }, [])

  return (
    <div className="marvel container">
      <h2 className="marvel__title">Фильмы Marvel</h2>
      <ul className="marvel__list">
        {
          movies.map((movie) => (
            <li key={movie.id} className="marvel__item">
              <Link to={`/movie/${movie.id}`}>
                <img src={`${url}${movie.poster_path}`} alt={movie.orginal_title}/>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Marvel;