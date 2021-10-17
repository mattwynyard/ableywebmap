import React, {useState} from "react";
import "./App.css";
import Mapper from "./Mapper.js";
import CustomFooter from "./CustomFooter";
import CustomNavbar from "./CustomNavbar";
import CustomSpinner from "./CustomSpinner"
function App() {

  const [status, setStatus] = useState("Loading");
  const [show, setShow] = useState(true);
  
  /**
   * Callback Hides spinner when map is loaded or error if not, called in mapper
   * @param {string} status - The Map load status
   */
  const setLoadStatus = (status) => {
    if (status === "loaded") {
      setShow(false);
    } else {
      setStatus(status);
    }
  }

  return (
    <React.Fragment>
      <CustomNavbar 
      />
      <Mapper 
        setLoadStatus={setLoadStatus}
      />
      <CustomSpinner 
        className="spinner" 
        show={show} 
        status={status}
      />
      <CustomFooter/>
    </React.Fragment>   
  );
}

export default App;
