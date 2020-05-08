// import MovieSearch from "../container/MovieSearch";
import MovieSearch from "../../containers/MovieSearch";
import MovieCard from "../../containers/MovieCard";
import React, { Component } from 'react'
import {
  Container,
  Header,
  Segment,

} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h4'
      content='Find the Movies YOU want to watch!'
      inverted
      style={{
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    <Header
      as='h5'
      content="In a world where we spend most of their time staring at screens, find a movie you actually want to watch based off of your peer's ratings!"
      inverted
      style={{
        fontWeight: 'normal',
        width: '250px!important',
    
        // width: `${width}px`!important,
      }}
    />
  </Container>
)

class DesktopContainer extends Component {
  renderSearch = () => {
    return (
      <MovieSearch />
    );
  }
// renderMovieCards = () => {
//   console.log(this.state);
//   console.log(this.props);
//   return (
//     "hello"
//     <MovieCard
//     />
//   )
// }
  render() {
    return (
      <div id='home-page'>
        <Segment
          floated='left'
          vertical
        >
          <Container id='home-page-items'
            // verticalAlign='middle'
            // style={{"height" : "100%"}}
          >
            <HomepageHeading >
            </HomepageHeading>
            <div>{this.renderSearch()}</div>
          </Container>
        </Segment>
        {/* <div>{this.renderMovieCards()}</div> */}
      </div>
    )
  }
}

const HomepageLayout = () => (
  <DesktopContainer />
)

export default HomepageLayout
