import React from "react";
import ReactMapboxGl, {
  ZoomControl,
  Layer,
  Feature,
  Marker
} from "react-mapbox-gl";

import "./MapComponent.css";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onZoomClicked = this.onZoomClicked.bind(this);

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
    let response = await fetch("/data.json");
    let points = await response.json();
    console.log(points);

    let multipliedPoints = [];

    points.forEach(point => {
      console.log(point.population);

      let strength =
        point["Accommodation and food services"] / point.population;

      for (var i = 0; i < strength; i += 1) {
        multipliedPoints.push({ lat: point.lat, lng: point.lng });
      }
    });

    console.log(multipliedPoints);
    this.setState({
      heatmapData: multipliedPoints
    });

    // this.setState({
    //   points
    // });
  }

  onSelect = (result, lat, lng, text) => {};

  onMapClicked = (map, e) => {
    console.log(map);
    // this.setState({
    //   zoom: [map.transform.zoom]
    // });
  };

  onZoomClicked = (map, zoomDiff) => {
    console.log(map);
    console.log(zoomDiff);

    let zoom = parseFloat(this.state.zoom) + parseFloat(zoomDiff);
    console.log("Change Zoom", zoom);

    this.setState({
      zoom
    });
  };

  render() {
    if (this.props.disabled) return null;

    var accessToken =
      "pk.eyJ1IjoibmNob3dkaCIsImEiOiJjajdqemd6eWIyN2x4MnducHd2MjdsdWJjIn0.EsH0fe7YD929n9X4puTgeQ";

    let Map = ReactMapboxGl({
      accessToken
    });
    var centerMap = [152.903463, -31.431529];

    let assetView = <div />;
    if (this.state.heatmapData) {
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
              stops: [[1, 0], [62, 3]]
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
              "rgb(166,0,219)",
              0.6,
              "rgb(103,169,207)",
              0.8,
              "rgb(28,144,255)"
            ],
            // increase radius as zoom increases
            "heatmap-radius": {
              stops: [[11, 80], [15, 100]]
            },
            // decrease opacity to transition into the circle layer
            "heatmap-opacity": {
              default: 1,
              stops: [[14, 0.5], [15, 0]]
            }
          }}
        >
          {this.state.heatmapData.map((point, index) => {
            return <Feature key={index} coordinates={[point.lng, point.lat]} />;
          })}
        </Layer>
      );
    }

    return (
      <div id="map">
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          center={centerMap}
          onClick={this.onMapClicked}
          zoom={[this.state.zoom]}
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
        >
          {assetView}
        </Map>
        <ZoomControl onControlClick={this.onZoomClicked} />
      </div>
    );
  }
}

export default MapComponent;
