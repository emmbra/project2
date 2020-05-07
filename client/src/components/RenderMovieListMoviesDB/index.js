import React from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { Grid, List } from 'semantic-ui-react';


const RenderMovieListMoviesDB = props => {

  const renderMovieListMoviesDB = () => {
    if (props.items.length === 0) {
      return '';
    } else {
      console.log(props);
      return props.items.map(movie => {
        return (
          <div key={movie.id}>
            <List divided verticalAlign='middle'>
              <Link to={`/movies/${movie.id}`}><li>{movie.movieTitle}</li></Link>
            </List>
          </div>
        )
      });
    }
  }
  return (
    <ul>
      {renderMovieListMoviesDB()}
    </ul>
  );
};
export default RenderMovieListMoviesDB;
