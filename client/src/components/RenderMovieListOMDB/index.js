import React from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";


const RenderMovieListOMDB = props => {
  const renderMovieListOMDB = () => {
    if (props.items.length === 0) {
      return <PacmanLoader/>;
    } else {
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
      { renderMovieListOMDB() }
    </ul>
  );
};
export default RenderMovieListOMDB;
