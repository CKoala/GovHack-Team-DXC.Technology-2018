import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "./MapComponent.css";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);

    this.state = {
      visible: false,
      zoom: [11],
      uploading: false
    };
  }

  componentDidMount() {
    if (this.state.lat && this.state.lng) {
      this.props.auth.getAccessToken().then(
        token => {
          this.props.fetchAssets(token, this.state.lat, this.state.lng, 500);
        },
        err => console.log(err)
      );
    }

    this.loadDataFromJson();
  }

  async loadDataFromJson() {
    let response = await fetch("/trees.json");
    let points = await response.json();
    console.log(points);
    this.setState({
      points
    });
  }

  onSelect = (result, lat, lng, text) => {};

  onMapClicked = (map, e) => {
    console.log(map);
    // this.setState({
    //   zoom: [map.transform.zoom]
    // });
  };

  render() {
    if (this.props.disabled) return null;

    var accessToken =
      "pk.eyJ1IjoibmNob3dkaCIsImEiOiJjajdqemd6eWIyN2x4MnducHd2MjdsdWJjIn0.EsH0fe7YD929n9X4puTgeQ";

    let Map = ReactMapboxGl({
      accessToken
    });
    var centerMap = [149.128341, -35.375121];

    let assetView = <div />;
    if (this.state.points) {
      assetView = (
        <Layer
          type="heatmap"
          id="business-heat"
          maxzoom="15"
          paint={{
            // increase weight as diameter breast height increases
            "heatmap-weight": {
              property: "dbh",
              type: "exponential",
              stops: [[1, 0], [62, 1]]
            },
            // increase intensity as zoom level increases
            "heatmap-intensity": {
              stops: [[11, 1], [15, 3]]
            },
            // assign color values be applied to points depending on their density
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(236,222,239,0)",
              0.2,
              "rgb(208,209,230)",
              0.4,
              "rgb(166,189,219)",
              0.6,
              "rgb(103,169,207)",
              0.8,
              "rgb(28,144,153)"
            ],
            // increase radius as zoom increases
            "heatmap-radius": {
              stops: [[11, 15], [15, 20]]
            },
            // decrease opacity to transition into the circle layer
            "heatmap-opacity": {
              default: 1,
              stops: [[14, 1], [15, 0]]
            }
          }}
        >
          {this.state.points.map((point, index) => {
            return (
              <Feature
                key={index}
                coordinates={[
                  point.geometry.coordinates[0],
                  point.geometry.coordinates[1]
                ]}
              />
            );
          })}
        </Layer>
      );
    }

    return (
      <div id="map">
        <Map
          style="mapbox://styles/mapbox/light-v9"
          center={centerMap}
          onClick={this.onMapClicked}
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
        >
          {this.state.lng && this.state.lat ? (
            <Marker coordinates={centerMap} anchor="bottom">
              <img
                style={{ width: 30, height: 30 }}
                src="/map-marker.png"
                alt={"Marker"}
              />
            </Marker>
          ) : null}
          {assetView}
        </Map>
      </div>
    );
  }
}

export default MapComponent;
