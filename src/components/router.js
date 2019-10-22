import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./Home";
import { Search } from "./Search";
import { NavBar } from "./navBar";
import { MoreDetails } from "./MoreDetails";

export class RouterComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/MoreDetails" component={MoreDetails} />
        </Router>
      </div>
    );
  }
}
