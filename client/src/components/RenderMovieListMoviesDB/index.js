import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'

class RenderMovieListMoviesDB extends Component {
  renderMovieList = () => {
    if (!this.props.items.length) {
      return "";
    } else {
      console.log(this.props);
      return this.props.items.map((movie) => {
        return (

          <div key={movie.id} id="main-list">
            {/* build a card component for these that takes the props */}
            <Link to={`/movies/${movie.id}`}>{movie.movieTitle}
            <img src={movie.moviePoster} alt={movie.movieTitle}/>
            </Link>
            {movie.movieCommenter}: {movie.movieComments}
          </div>

        );
      });
    }
  };

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return <ul>{this.renderMovieList()}</ul>;
  }
}

export default RenderMovieListMoviesDB;
