import React from "react";
import './App.css';
import Mapper from "./Mapper.js";
import CustomNavbar from "./CustomNavbar";
import {Spinner} from 'react-bootstrap';

function App() {

  return (
    <React.Fragment>
      <CustomNavbar></CustomNavbar>
      <Mapper>
        <Spinner></Spinner>
      </Mapper>
    </React.Fragment>
        
    
  );
}

export default App;
