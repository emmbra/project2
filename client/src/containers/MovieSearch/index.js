import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import Axios from "axios";
import RenderMovieListMoviesDB from "../../components/RenderMovieListMoviesDB";
import RenderOMDBMovieCard from "../../components/RenderOMDBMovieCard";
import RenderMovieRatingForm from "../../components/RenderMovieRatingForm";
import MovieRating from "../MovieRating";
import Wrapper from "../../components/Wrapper";

class MovieSearchOMDB extends Component {
  state = {
    movies: [],
    movieInput: "",
    movie: {},
    section: 0,
    value: "",
  };

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await Axios.get("/api/movies");
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleDeleteMovie = async (id) => {
    try {
      const { data } = await Axios.delete(`/api/movies/${id}`);
      this.setState({ movies: data });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmitOMDB = async (event) => {
    event.preventDefault();
    try {
      const movieInput = this.state.movieInput;
      // const { data } = await Axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMDB_API}`);
      const { data } = await Axios.get(`/api/movies/omdb/${movieInput}`);
      console.log(data);
      this.setState({ movie: data, movies: [], movieInput: "", section: 1 });
      // this.props.history.push('/moviesearch')
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmitMoviesDB = async (event) => {
    event.preventDefault();
    try {
      const movieTitle = this.state.movieInput;
      const { data } = await Axios.get(`/api/movies/title/${movieTitle}`);
      console.log(data);
      // const movies = [...this.state.movies, data];
      // this.setState({ movie:, movieInput: '' });
    } catch (e) {
      console.log(e);
    }
  };

  handleAddMovie = async (event) => {
    event.preventDefault();
    try {
      const movieTitle = this.state.moviesTitle;
      const { data } = await Axios.post("/api/movies", {
        text: this.state.todoInput,
      });
      console.log(data);
      // created a new array and inserted the new data in it:
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: "" }); // call this in order to reset the page and also clear the input bar
    } catch (e) {
      console.log(e);
    }
  };

  // renderCard = () => {
  //   // if(!this.state.movie) {
  //   //   return '';
  //   // } else {
  //     return (
  //       <RenderOMDBMovieCard
  //       items={this.state.movie.Title}
  //       moviePoster={this.state.movie.Poster}
  //       movieTitle={this.state.movie.Title}
  //       movieDirector={this.state.movie.Director}
  //       movieYear={this.state.movie.Year}
  //       moviePlot={this.state.movie.Plot}
  //       movieRated={this.state.movie.Rated}
  //       movieGenre={this.state.movie.Genre}
  //       movieRatingIMDB={this.state.movie['Ratings'][0].Value}
  //       movieRatingRT={this.state.movie['Ratings'][1].Value}
  //       movieRatingMC={this.state.movie['Ratings'][2].Value}
  //       />
  //     );
  //   // }
  // }

  renderMain = () => {
    switch (this.state.section) {
      case 0:
        return (
          <RenderMovieListMoviesDB
            items={this.state.movies}
            handleDeleteMovie={this.handleDeleteMovie}
          />
        );
      case 1:
        return (
          <Wrapper>
            <RenderOMDBMovieCard
              items={this.state.movie.Title}
              moviePoster={this.state.movie.Poster}
              movieTitle={this.state.movie.Title}
              movieDirector={this.state.movie.Director}
              movieYear={this.state.movie.Year}
              moviePlot={this.state.movie.Plot}
              movieRated={this.state.movie.Rated}
              movieGenre={this.state.movie.Genre}
              movieRatingIMDB={this.state.movie["Ratings"][0].Value}
              movieRatingRT={this.state.movie["Ratings"][1].Value}
              movieRatingMC={this.state.movie["Ratings"][2].Value}
            />
            <MovieRating />
            {/* <RenderMovieRatingForm
              handleAddMovie={this.handleAddMovie}
              value={this.state.value}
            /> */}
          </Wrapper>
        );

      default:
        break;
    }
  };

  render() {
    // console.log("I rendered inside of movieSearch render");
    // console.log(this.props);
    console.log(this.state);
    // console.log(this.state.movieInput);
    // console.log(this.props);
    console.log(this.state.movies);
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitOMDB(e)}>
          >
          <input
            name="movieInput"
            placeholder="Enter a movie title..."
            value={this.state.movieInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmitOMDB(e)}>
            Search for a new movie to rate
          </button>
          <button onClick={(e) => this.handleSubmitMoviesDB(e)}>
            Search rated movies
          </button>
        </form>
        {/* conditionally render components */}
        <div>{this.renderMain()}</div>
        {/* {Object.keys(this.state.movie).length && this.renderCard()} */}
        {/* <RenderMovieListMoviesDB
          items={this.state.movies}
          handleDeleteMovie={this.handleDeleteMovie}
        /> */}
        {/* <Route
          exact
          path="/moviesearch/rating"
          render={() => <MovieRating />}
        /> */}
      </div>
    );
  }
}

export default MovieSearchOMDB;
