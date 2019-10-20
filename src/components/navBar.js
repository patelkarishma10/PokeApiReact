import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class NavBar extends Component {
render() {
        return (
          <div>
              <ul className="navBar">
                <li id="Search"><Link to="/Search">Search</Link></li>
                <li id="Home" ><Link to="/">Home</Link></li>
              </ul>
          </div>
        )
      }
}