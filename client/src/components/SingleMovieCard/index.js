import React from "react";
import { Link } from "react-router-dom";
import { Card, Popup, Rating } from "semantic-ui-react";
import "./style.css";

function SingleMovieCard(props) {
  const popUpSad = () => {
    if (props.movie.movieSad === 1) {
      return <img src='./image/sad.svg' alt="sad emoji" class="emoji-image" />
    } else {
      return "";
    }
  };
  const popUpFunny = () => {
    if (props.movie.movieFunny === 1) {
      return <img src='./image/funny.svg' alt="tearing laugh emoji" class="emoji-image" />
    } else {
      return "";
    }
  };
  const popUpRomance = () => {
    if (props.movie.movieRomance === 1) {
      return <img src='./image/romance.svg' alt="lovey eyes emoji" class="emoji-image" />
    } else {
      return "";
    }

  };
  const popUpAction = () => {
    if (props.movie.movieAction === 1) {
      return <img src='./image/action.svg' alt="head blowing up emoji" class="emoji-image" />
    } else {
      return "";
    }
  };

  return (

    <Popup
      trigger={
        <Card>
          <div className="moviePoster">
            <img
              className="movieImage"
              alt="movie poster"
              src={props.movie.moviePoster}
              wrapped
              ui={false}
            />
          </div>
          <Card.Content>
            <Card.Header>
              <Link to={`/movies/${props.movie.id}`}>
                <div className="movie-title-list-header">{props.movie.movieTitle}
                </div>
              </Link>
            </Card.Header>
            <Card.Meta>{props.movie.movieYear}</Card.Meta>
          </Card.Content>
          <Card.Content>
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

        <div>
          <span>{popUpSad()}{popUpFunny()}{popUpRomance()}{popUpAction()}</span>

        </div>
      </Popup.Content>
    </Popup>

  );
}

export default SingleMovieCard;
