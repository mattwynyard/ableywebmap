import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import './App.css';
import Mapper from "./Mapper.js";
import CustomNavbar from "./CustomNavbar";
import CustomSpinner from "./CustomSpinner"
function App() {

  const [status, setStatus] = useState("Loading");
  const [show, setShow] = useState(true);
  
  const copyright = "© Matt Wynyard Ltd. All rights reserved 2021";
  
  /**
   * Hides spinner when map is loaded, called mapper
   * @param {string} status - The Map load status
   */
  const setLoaded = (status) => {
    if (status === "loaded") {
      setShow(false);
    } else {
      console.log(status)
    }
  }

  return (
    <React.Fragment>
      <CustomNavbar 
        className="navbar"
      />
      <Mapper 
        setLoaded={setLoaded}
      />
      <CustomSpinner 
        className="spinner" 
        show={show} 
        status={status}
      />
      <Card className="footer">
        <Card.Body>{copyright}</Card.Body>
      </Card>
    </React.Fragment>   
  );
}

export default App;
