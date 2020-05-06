import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieSearch from '../../containers/MovieSearch';
import MovieCard from '../../containers/MovieCard';
import MovieRatings from '../../containers/MovieRatings'

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={MovieSearch}/>
      <Route exact path='/movies/:id' component={MovieCard}/>
      <Route exact path='/movieratings' component={MovieRatings}/>
      <Route path='/moviesearch' component={MovieSearch}/>
    </Router>
);
export default App;
