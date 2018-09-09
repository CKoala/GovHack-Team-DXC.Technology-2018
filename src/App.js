import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import MapComponent from "./Components/MapComponent/MapComponent";
import NavBar from "./Components/NavBar/Navbar";
import createStore from "./store/createStore";

const store = createStore({
  filter: ""
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <MapComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
