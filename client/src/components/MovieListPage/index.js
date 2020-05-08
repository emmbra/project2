import React, { Component } from "react";
import Axios from 'axios';
import SingleMovieCard from "../SingleMovieCard";
import "./style.css";


class MovieListPage extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    this.getAllMovies();
  };

  getAllMovies = async () => {
    try {
      const { data } = await Axios.get("/api/movies");
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (!this.state.movies.length) {
      return "";
    } else {
      return this.state.movies.map((movie, index) => {
        return <SingleMovieCard key={index} movie={movie}/>
      });
    }
  }
}

export default MovieListPage;
