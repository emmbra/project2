import React, { Component } from "react";
import { Form, Icon, Grid, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import RenderMovieListMoviesDB from "../../components/RenderMovieListMoviesDB";
import RenderOMDBMovieCard from "../../components/RenderOMDBMovieCard";

class MovieRating extends Component {
  state = {
    movies: [],
    movieInput: "",
    movieTitle: "",
    movieYear: "",
    movieRating: "",
    movieSad: "",
    movieFunny: "",
    movieRomance: "",
    movieAction: "",
  };

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await Axios.get("/api/movies");
      this.setState({ movies: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  
  handleAddMovie = async event => {
    event.preventDefault();
    try {
      const movieTitle = this.state.moviesTitle
      const { data } = await Axios.post('/api/movies', {text: this.state.todoInput });
      console.log(data);
      // created a new array and inserted the new data in it:
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' }); // call this in order to reset the page and also clear the input bar
    } catch (e) {
      console.log(e);
    }
  }

  // handleUpdateText = async event => {
  //   try {
  //     const { data } = await axios.patch(`/api/todos/${this.props.match.params.todoId}/card`, { text: this.state.inputText });
  //     this.setState({ todo: data, inputText: '' });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }



  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Username" placeholder="Username" />
          </Form.Group>
          <Form.Group inline>
            <label>Movie Rating</label>
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
          <Form.Button onClick={(e) => this.handleAddMovie(e)}>Submit</Form.Button>
        </Form>
        <Button onClick={this.props.history.goBack}>Go to the movie search</Button>
      
      </div>
    );
  }
}

export default MovieRating;
