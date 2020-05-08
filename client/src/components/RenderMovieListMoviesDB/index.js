import React, { Component } from "react";
import { Card } from 'semantic-ui-react'
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
      return (
        <div className="cardContainer">
          <Card.Group>
            {this.props.items.map((movie, index) => <SingleMovieCard key={index} movie={movie} />)}
          </Card.Group>
        </div>
      );
    }
  }
}

export default RenderMovieListMoviesDB;
