import React from "react";
import {
  Container,
  Form,
  Rating,
  Divider,
} from "semantic-ui-react";
import "./style.css";

const RenderMovieRatingForm = (props) => {
  const renderMovieRatingForm = () => {
    // if( movie is defined ) {
    //   return (

    //   )
    // } else {
      
    // }

    return (
      <div class="body-content">
        <Container textAlign="center">
          <Divider horizontal>Rate the Movie Here</Divider>
          <Form>
            <Form.Group inline>
              <label>Movie Rating</label>
              <Rating
                name="movieRating"
                icon="star"
                defaultRating={3}
                maxRating={5}
                onRate={props.handleRating}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Field
                name="movieSad"
                checked={props.movieSad}
                label="Sad"
                control="input"
                type="checkbox"
                onChange={props.handleCheckbox}
              />
              <Form.Field
                name="movieFunny"
                checked={props.movieFunny}
                label="Funny"
                control="input"
                type="checkbox"
                onChange={props.handleCheckbox}
              />
              <Form.Field
                name="movieAction"
                checked={props.movieAction}
                label="Action"
                control="input"
                type="checkbox"
                onChange={props.handleCheckbox}
              />
              <Form.Field
                name="movieRomance"
                checked={props.movieRomance}
                label="Romance"
                control="input"
                type="checkbox"
                onChange={props.handleCheckbox}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                placeholder="Username"
                name="movieCommenter"
                value={props.movieCommenter}
                onChange={props.handleInputChange}
              />
              <Form.TextArea
                label="Comments"
                placeholder="Tell us what you thought about the movie."
                name="movieComments"
                value={props.movieComments}
                onChange={props.handleInputChange}
              />
            </Form.Group>
            <Form.Button onClick={props.handleAddMovie}>Submit</Form.Button>
          </Form>
          {/* <Button onClick={props.history.goBack}>Go to the movie search</Button> */}
        </Container>
      </div>
    );
  };
  return <div>{renderMovieRatingForm()}</div>;
};

export default RenderMovieRatingForm;
