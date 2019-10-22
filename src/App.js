import React, { Component } from "react";

import "./App.css";
import { RouterComponent } from "./components/router";

export class App extends Component {
  render() {
    return (
      <div>
        <RouterComponent />
      </div>
    );
  }
}

export default App;
