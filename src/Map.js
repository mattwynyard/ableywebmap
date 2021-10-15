import React, { useEffect, useRef } from "react";
import './App.css';
import WebMap from "@arcgis/core/WebMap";
// import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Compass from "@arcgis/core/widgets/Compass";
import LayerList from "@arcgis/core/widgets/LayerList";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

function Map() {
  const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            // const map = new WebMap({
            //     portalItem: { 
            //         id: "2ef6847aa63948238da7df02970ea859"
            //     }
            // });
            const map = new WebMap({
                basemap: "streets-vector"
            });

            const mapView = new MapView({
                map,
                container: mapRef.current,
                center: [ 174.763335, -36.848461],
                zoom: 13,
            });

            let scalebar = new ScaleBar({
                view: mapView,
                units: "metric"
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
            mapView.ui.add(homeWidget, "top-left");
            mapView.ui.add(scalebar, "bottom-right");
            mapView.ui.add(compass, "top-left");
            mapView.ui.add(layerlist, "top-right");
            mapView.ui.add(basemapToggle, "bottom-left");
            mapView.when(() => {
                console.log("loaded")
                scalebar.units = "metric"
            })
        }
  }, []);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default Map;