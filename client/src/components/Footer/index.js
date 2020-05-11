import React, { Component } from "react";
import { Divider, } from 'semantic-ui-react';
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div class="footer" >
        <Divider inverted section />
        <div className="footer-text" >
          <p>Created with lemonade by: </p>
          <img src = "./image/clapper-board.svg" className = "footer-image"/>
          <a href="https://github.com/emmbra" target="_blank"> Emmett Brady, </a>
          <a href="https://github.com/Tassim" target="_blank">Tassia Shibuya, & </a>
          <a href="https://github.com/cgleungsf" target="_blank">Christina Leung </a>
          <img src = "./image/clapper-board.svg" className = "footer-image"/>
        </div>
      </div>
    );
  }
}
