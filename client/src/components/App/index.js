import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieSearch from '../../containers/MovieSearch';
import MovieCard from '../../containers/MovieCard';
import RenderMovieRatingForm from '../../components/RenderMovieRatingForm';
import MovieListPage from '../MovieListPage';
import '../../../src/style.css';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={MovieSearch}/>
      <Route exact path='/movies/:id' component={MovieCard}/>
      <Route exact path='/movieratings' component={RenderMovieRatingForm}/>
      <Route exact path='/movieslist' component={MovieListPage}/>
    </Router>
);
export default App;
