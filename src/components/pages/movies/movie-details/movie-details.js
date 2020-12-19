import React, { useState, useEffect } from 'react';

import './movie-details.scss';
import MovieService from "../../../../services/movieService";
import MoviePlayer from "../../../movie-player";


const MovieDetails = ({ match }) => {

  const url = 'https://image.tmdb.org/t/p/w500/';
  const id = match.params.id;

  const [ movieData, setMovieData ] = useState([]);

  useEffect(() => {
    const movieService = new MovieService();

    movieService.getMovie(id)
      .then((data) => {
        setMovieData(data)
      })
  }, [id])


  return (
    <div className="container">
      <MoviePlayer id={id}/>
      <div className="movie-details">
        <div className="movie-details__header">
          <div className="movie-details__image">
            <img src={`${url}${movieData.backdrop_path}`} alt={movieData.original_title}/>
          </div>
          <div className="movie-details__info">
            <h2 className="movie-details__title">{movieData.original_title}</h2>
            <div className="movie-details__year">Год выхода:  {movieData.release_date}</div>
            <div className="movie-details__genres">Жанр: {movieData.genres && movieData.genres.map(item => item.name + ', ')}</div>
            <div className="movie-details__rating">Рейтинг:  {movieData.vote_average}</div>
          </div>
        </div>
        <div className="movie-details__description">
          {movieData.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;