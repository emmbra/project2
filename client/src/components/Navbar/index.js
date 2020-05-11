import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Header, Icon} from "semantic-ui-react";
import "./style.css";

export default class MenuExampleStackable extends Component {
  state = {};

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
      <div id="header-navbar" >
        <Menu stackable id="menunavbar">
          <Header as="h2">
            <Icon name="lemon outline" />
            <Header.Content className ="customFont">
              Fresh Lemons
              <Header.Subheader className="customFont">None of that rotten stuff</Header.Subheader>
            </Header.Content>
          </Header>
          <Menu.Menu position="right">

            <Menu.Item>
            {/* <Menu.Item name="home" onClick={this.handleItemClick}> */}

              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item>
            {/* <Menu.Item name="viewMovies" onClick={this.handleItemClick}> */}
              <Link to="/movieslist">Movie List</Link>
            </Menu.Item>

          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
