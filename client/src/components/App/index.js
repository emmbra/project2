import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieSearch from '../../containers/MovieSearch';
import MovieCard from '../../containers/MovieCard';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={MovieSearch}/>
      <Route exact path='/viewmovies/:id' component={MovieCard}/>
      <Route exact path='/moviesearch' component={MovieSearch}/>
    </Router>
);
export default App;
