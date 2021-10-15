import React, { useEffect, useRef } from "react";
import './App.css';
import WebMap from "@arcgis/core/WebMap";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {

      const map = new ArcGISMap({
        basemap: "gray-vector",
      });

      const view = new MapView({
        map,
        container: mapRef.current,
        extent: {
          spatialReference: {
            wkid: 4326,
          },
        },
      });
    }
  }, []);

  return (
    <div className="map" ref={mapRef}>
    </div>
  );
}

export default App;
