import React, {useState} from "react";
import './App.css';
import Mapper from "./Mapper.js";
import CustomNavbar from "./CustomNavbar";
import CustomSpinner from "./CustomSpinner"
function App() {

  const [status, setStatus] = useState("Loading");
  const [show, setShow] = useState(true)
  
  const setLoaded = () => {
    setShow(false)
    setStatus("Loaded")
  }
  return (
    <React.Fragment>
      <CustomNavbar></CustomNavbar>
      <Mapper setLoaded={setLoaded}>
        
      </Mapper>
      <CustomSpinner className="spinner" show={show} status={status}></CustomSpinner>
    </React.Fragment>
        
    
  );
}

export default App;
