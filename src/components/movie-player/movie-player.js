import React, { useState, useEffect } from 'react';

import './movie-player.scss';
import MovieService from "../../services/movieService";


const MoviePlayer = ({ id }) => {

  const [ video, setVideo ] = useState([]);

  useEffect(() => {

    const movieService = new MovieService();

    movieService.getVideo(id)
      .then((video) => {
        setVideo(video)
        console.log(video)
      })
  }, [])

  return (
    <div>
      <video src="">

      </video>
    </div>
  );
}

export default MoviePlayer;