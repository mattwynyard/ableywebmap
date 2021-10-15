import {Spinner} from 'react-bootstrap';

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