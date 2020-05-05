import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieSearchMoviesDB from '../../containers/MovieSearchMoviesDB';
import MovieSearchOMDB from '../../containers/MovieSearchOMDB';
import MovieCard from '../../containers/MovieCard';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={MovieSearchOMDB}/>
      <Route exact path='/viewmovies' component={MovieSearchMoviesDB}/>
      <Route exact path='/viewmovies/:id' component={MovieCard}/>
      <Route exact path='/ratemovies' component={MovieSearchOMDB}/>
    </Router>
);
export default App;
