import React from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";


const RenderMovieListMoviesDB = props => {
  const renderMovieList = () => {
    console.log(props.movies);
    console.log(props.numberMovies);
    if (props.movies.length === 0) {
      return <PacmanLoader/>;
    } else {
      return props.movies.map(todo => {
        return (
          <div key={todo.id}>
            <Link to={`/todos/${todo.id}`}><li style={{ color: todo.completed ? 'blue' : 'red' }} >{todo.text}</li></Link>
            <button onClick={ () => props.handleDelete(todo.id) }>Delete</button>
            <button onClick={ () => props.handleUpdateCompletedTodo(todo.id) }>Update</button>
          </div>
        )
      });
    }
  }
  return (
    <ul>
      { renderMovieList() }
    </ul>
  );
};
export default RenderMovieListMoviesDB;
