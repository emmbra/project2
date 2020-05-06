import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RenderMovieListOMDB from '../../components/RenderMovieListOMDB';
import RenderMOvieListMoviesDB from '../../components/RenderMovieListMoviesDB';

class MovieSearchOMDB extends Component {
  state = {
    movies: [],
    movieInput: ''
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/movies');
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }



  handleSubmitOMDB = async event => {
    event.preventDefault();
    try {
      const movieTitle = this.props.match.params.movieTitle;
      const { data } = await axios.get(`/api/title/${movieTitle}`);
      this.setState({ movies:data, movieInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmitMoviesDB = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/movies', {text: this.state.movieInput });
      const movies = [...this.state.movies, data];
      this.setState({ movies, movieInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("I rendered inside of Form");
    console.log(this.props);
    return (
      <div>
        <form>
          <input
            name="movieInput"
            placeholder="Enter a movie title..."
            value={this.state.movieInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmitOMDB(e)}>Search rated movies</button>
          <button onClick={(e) => this.handleSubmitMoviesDB(e)}>Search for a new movie</button>
        </form>
        <RenderMovieListOMDB
          items={this.state.movies}
        />
      </div>
    );
  }
}

export default MovieSearchOMDB;
