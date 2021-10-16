import React from "react";
import {Card} from 'react-bootstrap';
import './App.css';

function CustomFooter() {
    const copyright = "© Property Consultants Ltd. All rights reserved 2021";
    return (
        <Card className="footer">
            <Card.Body>{copyright}</Card.Body>
        </Card>
    )
}
export default CustomFooter;