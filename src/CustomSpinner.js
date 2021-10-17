import {Spinner} from 'react-bootstrap';
import React from 'react';

const CustomSpinner = (props) => {
    if (props.show) {
      return(
        <div className="spinner">
          <Spinner
            animation="border"
            variant="secondary"
            size="lg"
            role="status"
          ></Spinner>
          <p>{props.status}</p>
        </div>
      );
    } else {
      return(
        null
      );    
    }  
  }

  export default CustomSpinner;