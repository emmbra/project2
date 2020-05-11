import React, { Component } from "react";
import Axios from "axios";
import RenderMovieListMoviesDB from "../../components/RenderMovieListMoviesDB";
import RenderOMDBMovieCard from "../../components/RenderOMDBMovieCard";
import RenderMovieRatingForm from "../../components/RenderMovieRatingForm";
import Wrapper from "../../components/Wrapper";
import { Container, Header, Button, Input, Divider } from "semantic-ui-react";
import "./style.css";

class MovieSearchOMDB extends Component {
  state = {
    movies: [],
    movieInput: "",
    movie: {},
    section: 2,
    movieRating: 3,
    movieSad: false,
    movieAction: false,
    movieFunny: false,
    movieRomance: false,
    movieCommenter: "",
    movieComments: "",
  };

  async componentDidMount() {
    console.log("Inside componentDidMount");
    this.getAllMovies();
  }

  getAllMovies = async () => {
    try {
      const { data } = await Axios.get("/api/movies");
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleRating = (event, { rating, name }) => {
    this.setState({ [name]: rating });
  };

  handleCheckbox = (event) => {
    const { name } = event.target;
    this.setState({ [name]: !this.state[name] });
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
      const { data } = await Axios.get(`/api/movies/omdb/${movieInput}`);
      this.setState({ movie: data, movieInput: "", section: 1 });
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmitMoviesDB = async (event) => {
    event.preventDefault();
    try {
      const movieTitle = this.state.movieInput;
      await Axios.get(`/api/movies/title/${movieTitle}`);
      // const movies = [...this.state.movies, data];
      // this.setState({ movie:, movieInput: '' });
    } catch (e) {
      console.log(e);
    }
  };

  handleAddMovie = async () => {
    try {
      const { data } = await Axios.post("/api/movies/addmovie", {
        movieTitle: this.state.movie.Title,
        movieYear: this.state.movie.Year,
        moviePoster: this.state.movie.Poster,
        movieRating: this.state.movieRating,
        movieSad: this.state.movieSad,
        movieFunny: this.state.movieFunny,
        movieRomance: this.state.movieRomance,
        movieAction: this.state.movieAction,
        movieComments: this.state.movieComments,
        movieCommenter: this.state.movieCommenter,
      });
      console.log(data);
      this.setState({ section: 0 });
    } catch (e) {
      console.log(e);
    }
  };

  renderMain = () => {
    switch (this.state.section) {
      case 0:
        return (
          <RenderMovieListMoviesDB
            items={this.state.movies}
            getAllMovies={this.getAllMovies}
            // handleDeleteMovie={this.handleDeleteMovie}
          />
        );
      case 1:
        return (
          <Wrapper>
            <RenderOMDBMovieCard
              items={this.state.movie}
              moviePoster={this.state.movie.Poster}
              movieTitle={this.state.movie.Title}
              movieDirector={this.state.movie.Director}
              movieYear={this.state.movie.Year}
              moviePlot={this.state.movie.Plot}
              movieRated={this.state.movie.Rated}
              movieGenre={this.state.movie.Genre}
              movieRatingIMDB={
                this.state.movie["Ratings"]
                  ? this.state.movie["Ratings"][0].Value
                  : "N/A"
              }
              movieRatingRT={
                this.state.movie["Ratings"]
                  ? this.state.movie["Ratings"][1].Value
                  : "N/A"
              }
              movieRatingMC={
                this.state.movie["Ratings"]
                  ? this.state.movie["Ratings"][2].Value
                  : "N/A"
              }
            />
            <RenderMovieRatingForm
              handleAddMovie={this.handleAddMovie}
              handleInputChange={this.handleInputChange}
              handleRating={this.handleRating}
              handleCheckbox={this.handleCheckbox}
              // value={this.state.value}
              movieTitle={this.state.movieTitle}
              movieYear={this.state.movieYear}
              movieRating={this.state.movieRating}
              movieSad={this.state.movieSad}
              movieFunny={this.state.movieFunny}
              movieRomance={this.state.movieRomance}
              movieAction={this.state.movieAction}
              movieComments={this.state.movieComments}
              movieCommenter={this.state.movieCommenter}
            />
          </Wrapper>
        );
        case 2:
          return (
            <div></div>
          );
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <div id="home-page">
          {/* <Segment floated="left" vertical> */}
            <Container id="home-information">
              <Container text>
                <Header
                  as="h4"
                  content="Find the right movie to watch!"
                  inverted
                  style={{
                    fontWeight: "normal",
                    marginBottom: 0,
                  }}
                />
                <Header
                  as="h5"
                  content="See movie ratings from IMDB, Rotten Tomatoes, and Metacritic. Then add your own Fresh Lemon rating!"
                  inverted
                  style={{
                    fontWeight: "normal",
                    width: "200px!important",
                  }}
                />
                <br/>
              </Container>
              <form onSubmit={(e) => this.handleSubmitOMDB(e)}>
                <Input
                  size="small"
                  name="movieInput"
                  placeholder="Enter a movie title..."
                  value={this.state.movieInput}
                  onChange={this.handleInputChange}
                />
                <Divider hidden />
                <Button
                  primary
                  size="small"
                  onClick={(e) => this.handleSubmitOMDB(e)}
                >
                  Search for a movie to rate
                </Button>
              </form>
            </Container>
          {/* </Segment> */}
        </div>
        <div>{this.renderMain()}</div>
      </div>
    );
  }
}

export default MovieSearchOMDB;
