import React, { Component } from "react";
import SingleMovieCard from "../SingleMovieCard";
import "./style.css";

class RenderMovieListMoviesDB extends Component {

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    if (!this.props.items.length) {
      return "";
    } else {
      return this.props.items.map((movie, index) => {
        return <SingleMovieCard key={index} movie={movie}/>
      }); 
    }
  }
}

export default RenderMovieListMoviesDB;
