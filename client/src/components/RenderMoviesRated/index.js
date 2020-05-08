import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

class RenderMoviesRated extends Component {
  renderMoviesRated = () => {
    if (this.props.items.length === 0) {
      return "";
    } else {
      console.log(this.props);
      return this.props.items.map((movie) => {
        return (
          <div key={movie.id} id="main-list">
            <Link to={`/movies/${movie.id}`}>{movie.movieTitle}</Link>)
            {/* <Card.Group itemsPerRow={6}>
              <Card>
                <Image
                  src="/images/avatar/large/daniel.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>
                    <Link to={`/movies/${movie.id}`}>{movie.movieTitle}</Link>
                  </Card.Header>
                  <Card.Meta>{movie.movieYear}</Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group> */}
          </div>
        );
      });
    }
  };
  componentDidMount() {
    this.props.getAllMovies();
  }
  render() {
    return <ul>{this.renderMoviesRated()}</ul>;
  }
}

export default RenderMoviesRated;
