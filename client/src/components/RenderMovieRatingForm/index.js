import React from "react";
import {
  Container,
  Form,
  Icon,
  Grid,
  Button,
  Rating,
  Divider,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const RenderMovieRatingForm = (props) => {
  const renderMovieRatingForm = () => {
    const { value } = this.state.value;
    return (
      <div>
        <Container textAlign="center">
          <Divider horizontal>Rate the Movie Here</Divider>
          <Form>
            <Form.Group widths="equal">
              {/* <Form.Input fluid label="Username" placeholder="Username" /> */}
            </Form.Group>
            <Form.Group inline>
              <label>Movie Rating</label>
              <Rating
                icon="star"
                defaultRating={3}
                maxRating={5}
                onChange={this.handleInputChange}
              />
              <Form.Radio
                label="1"
                value="1"
                checked={value === "1"}
                onChange={this.handleInputChange}
              />
              <Form.Radio
                label="2"
                value="2"
                checked={value === "2"}
                onChange={this.handleInputChange}
              />
              <Form.Radio
                label="3"
                value="3"
                checked={value === "3"}
                onChange={this.handleInputChange}
              />
              <Form.Radio
                label="4"
                value="4"
                checked={value === "4"}
                onChange={this.handleInputChange}
              />
              <Form.Radio
                label="5"
                value="5"
                checked={value === "5"}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <Form.Group inline>
                  <label>Sad</label>
                  <Form.Radio
                    label=<Icon link name="thumbs up" />
                    value="yes"
                    checked={value === "yes"}
                    onChange={this.handleInputChange}
                  />
                  <Form.Radio
                    label=<Icon link name="thumbs down" />
                    value="no"
                    checked={value === "no"}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group inline>
                  <label>Funny</label>
                  <Form.Radio
                    label=<Icon link name="thumbs up" />
                    value="yes"
                    checked={value === "yes"}
                    onChange={this.handleInputChange}
                  />
                  <Form.Radio
                    label=<Icon link name="thumbs down" />
                    value="no"
                    checked={value === "no"}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Form.Group inline>
                  <label>Romance</label>
                  <Form.Radio
                    label=<Icon link name="thumbs up" />
                    value="yes"
                    checked={value === "yes"}
                    onChange={this.handleInputChange}
                  />
                  <Form.Radio
                    label=<Icon link name="thumbs down" />
                    value="no"
                    checked={value === "no"}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Form.Group inline>
                  <label>Action</label>
                  <Form.Radio
                    label=<Icon link name="thumbs up" />
                    value="yes"
                    checked={value === "yes"}
                    onChange={this.handleInputChange}
                  />
                  <Form.Radio
                    label=<Icon link name="thumbs down" />
                    value="no"
                    checked={value === "no"}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Form.TextArea
              label="Comments"
              placeholder="Tell us what you thought about the movie."
            />
            {/* <Form.Button onClick={(e) => this.handleAddMovie(e)}>Submit</Form.Button> */}
          </Form>
          {/* <Button onClick={this.props.history.goBack}>Go to the movie search</Button> */}
        </Container>
      </div>
    );
  };
  return <div>{renderMovieRatingForm()}</div>;
};

export default RenderMovieRatingForm;
