import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="search-container">
          <div className="search_bar_left">
          <div className="logo-container left_style hidden-xs">
            <img className="app-logo" src="/app-logo.png" />
          </div>
          </div>
          <div className="search_bar_center">
            <div className="center_style">
            <div className="search-icon">
                <i className="fas fa-search"></i></div>
              </div>
            </div>
          <div className="search_bar_right">
            <div className="right_style">
          <i className="fas fa-bars"></i></div>
          </div>
        </div>
        <div className="filter-container">
          <div className="filter-space-left">
          </div>
          <div className="filter-space-one">
            <div className="filter">
            <i className="icon fas fa-hotel"></i></div>
          </div>
          <div className="filter-space-two">
            <div className="filter">
            <i className="icon fas fa-palette"></i></div>
          </div>
          <div className="filter-space-three">
            <div className="filter">
            <i className="icon fas fa-dollar-sign"></i></div>
          </div>
          <div className="filter-space-four">
            <div className="filter">
            <i className="icon far fa-hospital"></i></div>
          </div>
          <div className="filter-space-five">
            <div className="filter">
            <i className="icon fab fa-amilia"></i></div>
          </div>
          <div className="filter-space-right">
          </div>
        <div>
        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;
