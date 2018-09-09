import React from "react";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import "./Navbar.css";
import { setFilter } from "../../actions/filterActions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(filter) {
    this.props.setFilter(filter);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.filter);
  }

  render() {
    return (
      <div className="nav-container">
        <ReactTooltip place="bottom" effect="float" className="tooltip-theme" />
        <div className="search-container">
          <div className="search_bar_left">
            <div className="logo-container left_style hidden-xs">
              <img className="app-logo" src="/app-logo.png" />
            </div>
          </div>
          <div className="search_bar_center">
            <div className="center_style">
              <div className="search-icon">
                <i className="fas fa-search" />
              </div>
            </div>
          </div>
          <div className="search_bar_right">
            <div className="right_style">
              <i className="fas fa-bars" />
            </div>
          </div>
        </div>
        <div className="filter-container">
          <div className="filter-space-left" />
          <div className="filter-space-one">
            <div
              className={
                this.props.filter === "Accommodation and food services"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                this.updateFilter("Accommodation and food services");
              }}
              data-tip="Accommodation and food services"
            >
              <i className="icon fas fa-hotel" />
            </div>
          </div>
          <div className="filter-space-two">
            <div
              className={
                this.props.filter === "Arts and recreation services"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                this.updateFilter("Arts and recreation services");
              }}
              data-tip="Arts and recreation services"
            >
              <i className="icon fas fa-palette" />
            </div>
          </div>
          <div className="filter-space-three">
            <div
              className={
                this.props.filter === "Financial and insurance services"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                this.updateFilter("Financial and insurance services");
              }}
              data-tip="Financial and insurance services"
            >
              <i className="icon fas fa-dollar-sign" />
            </div>
          </div>
          <div className="filter-space-four">
            <div
              className={
                this.props.filter === "Health care and social assistance"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                this.updateFilter("Health care and social assistance");
              }}
              data-tip="Health care and social assistance"
            >
              <i className="icon far fa-hospital" />
            </div>
          </div>
          <div className="filter-space-five">
            <div
              className={
                this.props.filter === "Information media and telecommunications"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => {
                this.updateFilter("Information media and telecommunications");
              }}
              data-tip="Information media and telecommunications"
            >
              <i className="icon fas fa-broadcast-tower" />
            </div>
          </div>
          <div className="filter-space-right" />
          <div />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setFilter: setFilter
};

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
