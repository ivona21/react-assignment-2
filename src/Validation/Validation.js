import React from "react";
import "./Validation.css";

const Validation = (props) => {    
    const valid = props.textLength >= 5;
    const validationMessage = valid ? "Text long enough" : "Text too short";
    const className = valid ? "Valid" : "Invalid";

    return (<p className={className}>{validationMessage}</p>);
}

export default Validation;