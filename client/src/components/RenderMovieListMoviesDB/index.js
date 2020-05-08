import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'

class RenderMovieListMoviesDB extends Component {
  renderMovieList = () => {
    if (this.props.items.length === 0) {
      return "";
    } else {
      console.log(this.props);
      return this.props.items.map((movie) => {
        return (
          // <div key={movie.id} id="main-list">
          //   <Link to={`/movies/${movie.id}`}>{movie.movieTitle}</Link>
          // </div>
          <Card.Group itemsPerRow={6}>
          <Card>
            <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                <Link to={`/movies/${movie.id}`}>{movie.movieTitle}</Link>
              </Card.Header>
              <Card.Meta>{movie.movieYear}</Card.Meta>
            </Card.Content>
          </Card>
          </Card.Group>
        );
      });
    }
  };

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return <ul>{this.renderMovieList()}</ul>;
  }
}

export default RenderMovieListMoviesDB;
