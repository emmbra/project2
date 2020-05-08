import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Popup, Rating, Grid } from "semantic-ui-react";
import "./style.css";

function SingleMovieCard(props) {
  // const PopUpGenerator = (props) => {
  const popUpGenerator = () => {
    if (props.movie.movieSad === 1) {
      return <span class="sad"> </span>;
    } else if (props.movie.movieSad === 0) {
      return "not so sad";
    }
    if (props.movie.movieFunny === 1) {
      return <span class="funny"> </span>;
    } else if (props.movie.movieFunny === 0) {
      return "not so funny";
    }
    if (props.movie.movieRomance === 1) {
      return <span class="romance"> </span>;
    } else if (props.movie.movieRomance === 0) {
      return "noromance";
    }
    if (props.movie.movieAction === 1) {
      return <span class="action"> </span>;
    } else if (props.movie.movieAction === 0) {
      return "no Action";
    }
  };
  // };
  // };

  return (
    // <Grid relaxed columns={4}>
    //   <Grid.Column>
    <Popup
      trigger={
    <Card>
      <div className="moviePoster">
        <img
          className="movieImage"
          src={props.movie.moviePoster}
          wrapped
          ui={false}
        />
      </div>
      <Card.Content>
        <Card.Header>
          <Link to={`/movies/${props.movie.id}`}>{props.movie.movieTitle}</Link>
        </Card.Header>
        <Card.Meta>{props.movie.movieYear}</Card.Meta>
      </Card.Content>
      <Card.Content>
        {/* {props.movie.movieRating}
            {props.movie.movieSad}
            {props.movie.movieFunny}
            {props.movie.movieRomance}
            {props.movie.movieAction} */}
        {props.movie.movieCommenter} says: "{props.movie.movieComments}"
      </Card.Content>
    </Card>
      }
    >
      <Popup.Header>User Rating</Popup.Header>
      <Popup.Content>
        <Rating
          icon="star"
          defaultRating={props.movie.movieRating}
          maxRating={5}
        />
        {props.movie.movieSad}
        {props.movie.movieFunny}
        {props.movie.movieRomance}
        {props.movie.movieAction}
        <div>{popUpGenerator()}</div>
      </Popup.Content>
    </Popup>
    //   </Grid.Column>
    // </Grid>
  );
}

export default SingleMovieCard;
