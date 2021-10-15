import React from "react";
import './App.css';
import Map from "./Map.js";
import CustomNavbar from "./CustomNavbar";
import {Spinner} from 'react-bootstrap';

function App() {

  return (
    <React.Fragment>
      <CustomNavbar></CustomNavbar>
      <Map>
        <Spinner></Spinner>
      </Map>
    </React.Fragment>
        
    
  );
}

export default App;
