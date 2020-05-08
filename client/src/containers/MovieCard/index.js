import React, { Component } from 'react';
import Axios from 'axios';
import {Header, Button, Icon, Segment } from 'semantic-ui-react';

class MovieCard extends Component {
  state = {
    movie: {
      movieTitle: '',
      movieYear: '',
      movieRating: '',
    }
  }

  handleDeleteMovie = async event => {
    try {
      await Axios.delete(`/api/movies/${this.props.match.params.id}`);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const { data } = await Axios.get(`/api/movies/${id}`);
      this.setState({ movie: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
    <Segment>
      <Segment.Group>
      <span><img src={this.state.movie.moviePoster} alt={this.state.movie.movieTitle}></img></span>
      <Header sub>Title: </Header><span>{this.state.movie.movieTitle}</span>
        <Header sub>Year: </Header><span> {this.state.movie.movieYear}</span>
        <Header sub> Rating: </Header> <span>{this.state.movie.movieRating}/5</span>
      </Segment.Group>
        <Button animated onClick={this.handleDeleteMovie}>
          <Button.Content visible>Delete movie</Button.Content>
          <Button.Content hidden>
          <Icon name='delete' />
      </Button.Content>
      </Button>
        <Button animated onClick={this.props.history.goBack}>
        <Button.Content visible>Go Back</Button.Content>
        <Button.Content hidden>
        <Icon name='backward' />
      </Button.Content>
      </Button>
    </Segment>
      </div>
    );
  }
}

export default MovieCard;