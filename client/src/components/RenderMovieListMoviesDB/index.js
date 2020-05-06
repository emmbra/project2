import React from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";


const RenderMovieListMoviesDB = props => {

  const renderMovieListMoviesDB = () => {
    if (props.items.length === 0) {
      return '';
    } else {
      console.log(props);
      return props.items.map(movie => {
        return (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}><li>{movie.movieTitle}</li></Link>
            {/* <button onClick={ () => props.handleDelete(todo.id) }>Delete</button>
            <button onClick={ () => props.handleUpdateCompletedTodo(todo.id) }>Update</button> */}
          </div>
        )
      });
    }
  }
  return (
    <ul>
      { renderMovieListMoviesDB() }
    </ul>
  );
};
export default RenderMovieListMoviesDB;
