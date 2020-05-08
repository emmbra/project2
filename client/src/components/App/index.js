import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieSearch from '../../containers/MovieSearch';
import MovieCard from '../../containers/MovieCard';
import RenderMovieRatingForm from '../../components/RenderMovieRatingForm';
import HomePage from '../../components/HomePage';
import RenderMoviesRated from '../RenderMoviesRated';
import '../../../src/style.css';

const App = () => (
    <Router>
      <Navbar/>
      <HomePage/>
      <Route exact path='/' component={MovieSearch}/>
      <Route exact path='/movies/:id' component={MovieCard}/>
      <Route exact path='/movieratings' component={RenderMovieRatingForm}/>
      <Route path='/moviesearch' component={MovieSearch}/>
      <Route path='/moviesRated' component={RenderMoviesRated}/>
    </Router>
);
export default App;
