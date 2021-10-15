import React, { useEffect, useRef } from "react";
import './App.css';
import WebMap from "@arcgis/core/WebMap";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new WebMap({
        portalItem: { 
          id: "5fcae3bfae5241b6abc3fa3ea93bdf3a"
        }
      });

      const view = new MapView({
        map,
        container: mapRef.current,
        center: [ 174.763335, -36.848461],
        zoom: 13,
      });
    }
  }, []);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default Map;