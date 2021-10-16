import React, { useEffect, useRef } from "react";
import './App.css';
import {buildingPopup, titlePopup} from './Popups.js';
import { meanSeaLevelRenderer, buildingsRenderer} from "./Renderers";
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
  const setStatus = props.setLoadStatus;

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
          zoom: 8,
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
      let titles = new FeatureLayer({
          url: "https://services7.arcgis.com/jI87xPT7G1AGV8Uo/ArcGIS/rest/services/LINZ_NZ_Property_Titles/FeatureServer/0",
          spatialReference: {
            wkid: 2193
          },
          outFields: ["title_no", "status", "type", "land_district", "issue_date", "estate_description"],
          popupTemplate: titlePopup
        });

      let buildings = new FeatureLayer({
        url: "https://services7.arcgis.com/jI87xPT7G1AGV8Uo/ArcGIS/rest/services/LINZ_NZ_Building_Outlines/FeatureServer",
        spatialReference: {
          wkid: 2193
        },
        renderer: buildingsRenderer,
        outFields: ["building_id", "name", "suburb_locality", "town_city", "use_", "territorial_authority"],
        popupTemplate: buildingPopup
      });

      let meanSeaLevel = new FeatureLayer({
        url: "https://services7.arcgis.com/jI87xPT7G1AGV8Uo/ArcGIS/rest/services/LINZ_NZ_Coastline_Mean_High_Water/FeatureServer/0",
        spatialReference: {
          wkid: 2193
        },
        renderer: meanSeaLevelRenderer
      });

      map.watch('loaded', () => {
        setStatus(map.loadStatus);
        map.add(titles, 0);
        map.add(buildings, 2);
        map.add(meanSeaLevel, 1);
      });

      map.watch('failed', () => {
        setStatus(map.loadStatus);
      });

      mapView.when(() => {
          mapView.ui.add(homeWidget, "top-left");
          mapView.ui.add(scalebar, "bottom-right");
          mapView.ui.add(compass, "top-left");
          mapView.ui.add(layerlist, "top-right");
          mapView.ui.add(basemapToggle, "bottom-left");
      })

      return () => {
        if(!!mapView) {
          mapView.destroy();
          mapView = null;
        }
      }
    }
  }, [setStatus]);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default Mapper;