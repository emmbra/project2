import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RenderMovieListOMDB from '../../components/RenderMovieListOMDB';

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
          <button onClick={(e) => this.handleSubmit(e)}>Search for movie</button>
        </form>
        <RenderMovieListOMDB
          items={this.state.movies}
        />
      </div>
    );
  }
}

export default MovieSearchOMDB;
