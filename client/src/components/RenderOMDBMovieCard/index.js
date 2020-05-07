import React from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Divider, Image, Grid } from "semantic-ui-react";

const RenderMovieCard = (props) => {
  // console.log(props);
  const renderMovieCard = () => {
    if (props.items.length === 0) {
      // return <PacmanLoader/>;
    } else {
      return (
        <div>
          <Grid celled>
            <Grid.Column width={3}>
              <Link to={`/movies/${props.items}`}></Link>
              <Image size="medium" src={props.moviePoster} floated="left" />
            </Grid.Column>
            <Grid.Column width={13}>
              <p>
                <strong>Title:</strong> {props.movieTitle}
              </p>
              <p>
                <strong>Director:</strong> {props.movieDirector}
              </p>
              <p>
                <strong>Rated:</strong> {props.movieRated}
              </p>
              <p>
                <strong>Genre:</strong> {props.movieGenre}
              </p>
              <p>
                <strong>Year:</strong> {props.movieYear}
              </p>
              <p>
                <strong>Plot:</strong> {props.moviePlot}
              </p>
              <p>
                <strong>IMDB Rating:</strong> {props.movieRatingIMDB}
              </p>
              <p>
                <strong>Rotten Tomatoes Rating:</strong> {props.movieRatingRT}
              </p>
              <p>
                <strong>Metacritic Rating:</strong> {props.movieRatingMC}
              </p>
              {/* <Link to={`/moviesearch/rating`}>Click here to rate this movie</Link> */}
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  };
  return <ul>{renderMovieCard()}</ul>;
};
export default RenderMovieCard;
