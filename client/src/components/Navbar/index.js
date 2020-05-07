// import React from 'react';

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Header, Icon, Segment } from 'semantic-ui-react';

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div id = 'header'>
          <Segment placeholder>
      <Menu stackable>
          <Header as='h2'>
      <Icon name='television' />
      <Header.Content>
      Marvelous Movies
        <Header.Subheader>Movie Ratings On Demand</Header.Subheader>
      </Header.Content>
    </Header>
        <Menu.Menu position="right">
          <Menu.Item>
            <img
              src="https://www.clipartmax.com/png/small/47-474783_popcorn-comments-popcorn-icon-png.png"
              alt="Popcorn Comments - Popcorn Icon Png @clipartmax.com"
            ></img>
          </Menu.Item>
            <Menu.Item
              name="viewMovies"
              active={activeItem === "viewMovies"}
              onClick={this.handleItemClick}
            >
          <Link to="/moviesearch">
              Movie Search
              </Link>
            </Menu.Item>
          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Segment>
      </div>
    );
  }
}
