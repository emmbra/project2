import React, { Component } from 'react';
import Axios from 'axios';

class MovieCard extends Component {
  state = {
    movie: {
      movieTitle: '',
      movieYear: '',
      movieRating: '',
    }
  }

  handleDeleteMovie = async event => {
    try {
      await Axios.delete(`/api/movies/${this.props.match.params.id}`);
      this.props.history.push('/movies');
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    // console.log("I'm inside componentDidMount");
    // console.log(this.props);
    // console.log(this.props.match.params.id);
    try {
      const id = this.props.match.params.id;
      const { data } = await Axios.get(`/api/movies/${id}`);
      this.setState({ movie: data });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <p>Title: {this.state.movie.movieTitle}</p>
        <p>Year: {this.state.movie.movieYear}</p>
        <p>Rating: {this.state.movie.movieRating}</p>
        <button onClick={this.handleDeleteMovie}>Delete movie</button>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default MovieCard;