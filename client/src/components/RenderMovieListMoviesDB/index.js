import React from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { Grid, List } from 'semantic-ui-react';

class RenderMovieListMoviesDB extends Component {
  renderMovieList = () => {
    if (this.props.items.length === 0) {
      return "";
    } else {
      console.log(this.props);
      return this.props.items.map((movie) => {
        return (
          <div key={movie.id} id="main-list">
            <Link to={`/movies/${movie.id}`}>{movie.movieTitle}</Link>
          </div>
        );
      });
    }
  };

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <ul>
        {this.renderMovieList()}
      </ul>
    );
  }
}

export default RenderMovieListMoviesDB;
