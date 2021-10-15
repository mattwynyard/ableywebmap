import React, { useEffect, useRef } from "react";
import './App.css';
import Map from "./Map.js";
import CustomNavbar from "./CustomNavbar";
import { Fragment } from 'react';

function App() {

  return (
    <React.Fragment>
      <CustomNavbar></CustomNavbar>
      <Map></Map>
    </React.Fragment>
        
    
  );
}

export default App;
