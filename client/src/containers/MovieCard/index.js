import React, { Component } from 'react';

class MovieCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: ''
    }
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <p>Place holder for our Movie info.</p>
        <p>Place holder for our Movie info.</p>
        <p>Place holder for our Movie info.</p>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default MovieCard;