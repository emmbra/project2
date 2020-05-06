import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RenderMovieListMoviesDB from '../../components/RenderMovieListMoviesDB';

class MovieSearchMoviesDB extends Component {
  state = {
    movies: [],
    movieInput: ''
  }

  // search for a movie by thte title in our database
  async componentDidMount() {
    console.log("Inside componentDidMount");
    console.log(this.props);
    console.log(this.props.match.params.movieTitle)
    try {
      const movieTitle = this.props.match.params.movieTitle;
      const { data } = await axios.get(`/api/title/${movieTitle}`);
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/movies', {text: this.state.movieInput });
      const movies = [...this.state.movies, data];
      this.setState({ movies, movieInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  // handleDeleteTodo = async id => {
  //   try {
  //     const { data: todos } = await axios.delete(`/api/todos/${id}`);
  //     this.setState({ todos });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // handleUpdateCompletedTodo = async id => {
  //   try {
  //     const { data: todos } = await axios.patch(`/api/todos/${id}`);
  //     this.setState({ todos });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    console.log("I rendered inside of moviesDB");
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            name="movieInput"
            placeholder="Search for a movie"
            value={this.state.movieInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmit(e)}>What movie would you like to see?</button>
        </form>
        <RenderMovieListMoviesDB
          movies={this.state.movies}
          numberMovies={this.state.movies.length}
        />
      </div>
    );
  }
}

export default MovieSearchMoviesDB;
