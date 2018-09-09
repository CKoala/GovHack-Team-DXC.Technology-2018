import React, { Component } from "react";
import "./App.css";

import MapComponent from "./Components/MapComponent/MapComponent";
import NavBar from "./Components/NavBar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MapComponent />
      </div>
    );
  }
}

export default App;
