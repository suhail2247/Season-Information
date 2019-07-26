import React from 'react';
import './ErrorDisplay.css';
const ErrorDisplay=(props)=>{
return(
    <div className="error">
        <i className="icon close massive"></i>
        <h1>
        {props.err}
        </h1>
    </div>
)
}
export default ErrorDisplay;