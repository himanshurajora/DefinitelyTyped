import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");

class MapController {
  map: Map;

  constructor(public mapDiv: string) {
  }

  start() {
    let point = new Point({
      latitude: 37.75,
      longitude: -122.45
    });

    this.map = new Map({
      basemap: { title: "topo-vector" }
    });

    let view = new MapView({
      center: point,
      container: this.mapDiv,
      map: this.map,
      zoom: 7
    });
  }
}

import esriRequest = require("esri/request");
esriRequest(new URL("https://js.arcigs.com/"));
