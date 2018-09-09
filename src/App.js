import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import MapComponent from "./Components/MapComponent/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapComponent />
        <div className="logo-container">
          <img className="app-logo" src="/app-logo.png" />
        </div>
      </div>
    );
  }
}

export default App;
