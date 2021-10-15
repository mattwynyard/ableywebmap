import React, { useEffect, useRef } from "react";
import './App.css';
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Compass from "@arcgis/core/widgets/Compass";
import LayerList from "@arcgis/core/widgets/LayerList";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Basemap from "@arcgis/core/Basemap";

function Mapper(props) {
  const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {

            const map = new WebMap({
                portalItem: { 
                    id: "b8663956ce2a4e8d9631977ac9571ffc"
                },
                spatialReference: {
                  wkid: 2193
                },
            });

            let nzImageryBasemap = new Basemap({
              portalItem: {
                id: "689fb0c9670a4d71bf9f31dd03a4730c"  // WGS84 Streets Vector webmap
              }
            });

            let mapView = new MapView({
                map,
                container: mapRef.current,
                spatialReference: {
                    wkid: 2193
                  },
                
                zoom: 5,
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
                nextBasemap: nzImageryBasemap
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

              map.watch('loading', (event) => {
                console.log(event)
                map.add(layer)
              });
            map.watch('loaded', (event) => {
              console.log(event)
              props.setLoaded();
              map.add(layer)
            });

            mapView.when(() => {
                console.log(mapView)
                mapView.ui.add(homeWidget, "top-left");
                mapView.ui.add(scalebar, "bottom-right");
                mapView.ui.add(compass, "top-left");
                mapView.ui.add(layerlist, "top-right");
                mapView.ui.add(basemapToggle, "bottom-left");
            });

            mapView.on("click", (event) => {
              console.log("click event: ", event.mapPoint);
            });

            
            return () => {
              if(!!mapView) {
                mapView.destroy();
                mapView = null;
              }
            }
        }
  }, []);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default Mapper;