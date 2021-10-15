import React, { useEffect, useRef } from "react";
import './App.css';
import WebMap from "@arcgis/core/WebMap";
import { load, project } from "@arcgis/core/geometry/projection";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Compass from "@arcgis/core/widgets/Compass";
import LayerList from "@arcgis/core/widgets/LayerList";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";

function Mapper() {
  const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {

            const map = new WebMap({
                portalItem: { 
                    id: "3d58e866fd31441a8c57d13a2e028392"
                }
            });

            const mapView = new MapView({
                map,
                container: mapRef.current,
                spatialReference: {
                    wkid: 2193
                  },
                center: [ 1570634.6, 5180148.2],
                zoom: 18,
            });

            let scalebar = new ScaleBar({
                view: mapView,
                unit: "metric",
                style: "ruler"
            });
            let compass = new Compass({
                view: mapView
              });
            let layerlist = new LayerList({
                view: mapView

            });
            let basemapToggle = new BasemapToggle({
                view: mapView,
                nextBasemap: "satellite"
              });
            let homeWidget = new Home({
            view: mapView
            });
            let layer = new FeatureLayer({
                url: "https://services7.arcgis.com/jI87xPT7G1AGV8Uo/ArcGIS/rest/services/LINZ_NZ_Property_Titles/FeatureServer/0",
                spatialReference: {
                  wkid: 2193
                },
              });

            mapView.ui.add(homeWidget, "top-left");
            mapView.ui.add(scalebar, "bottom-right");
            mapView.ui.add(compass, "top-left");
            mapView.ui.add(layerlist, "top-right");
            mapView.ui.add(basemapToggle, "bottom-left");
            map.add(layer)

            mapView.when(() => {
                console.log("loaded")
            });
        }
  }, []);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default Mapper;