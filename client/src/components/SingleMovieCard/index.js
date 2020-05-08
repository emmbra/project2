import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Popup, Rating } from 'semantic-ui-react'
import "./style.css";

function SingleMovieCard(props) {
  return (
    <Popup
      trigger={
      <Card.Group>
        <Card>
          <Image
            src={props.movie.moviePoster}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>
              <Link to={`/movies/${props.movie.id}`}>{props.movie.movieTitle}</Link>
            </Card.Header>
            <Card.Meta>{props.movie.movieYear}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {props.movie.movieRating}
            {props.movie.movieSad}
            {props.movie.movieFunny}
            {props.movie.movieRomance}
            {props.movie.movieAction}
            {props.movie.movieCommenter}
            {props.movie.movieComments}
          </Card.Content>
        </Card>
      </Card.Group>
      }
    >
    <Popup.Header>User Rating</Popup.Header>
      <Popup.Content>
        <Rating icon='star' defaultRating={props.movie.movieRating} maxRating={5} />
      </Popup.Content>
    </Popup>
  );
}

export default SingleMovieCard;
