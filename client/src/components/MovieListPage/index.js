import React, { Component } from "react";
import Axios from 'axios';
import SingleMovieCard from "../SingleMovieCard";
import "./style.css";
import { Card} from "semantic-ui-react";

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
      return (
        <div className="cardContainer">
          <Card.Group>
            {this.state.movies.map((movie, index) => <SingleMovieCard key={index} movie={movie} />)}
          </Card.Group>
        </div>
      );
    }
  }
}

export default MovieListPage;
