import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "../header";
import Marvel from "../pages/movies/marvel";
import MovieDetails from "../pages/movies/movie-details";

import './page.scss';
import './app.scss';


const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={Marvel} />
        <Route path="/movie/:id" component={MovieDetails} />

      </div>
    </Router>
  );
};

export default App;