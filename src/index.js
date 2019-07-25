import React from 'react';
import ReactDom from 'react-dom';
const App=()=>{
    //on success run first function otherwise second function
    window.navigator.geolocation.getCurrentPosition((position)=>{console.log(position)}
    ,(error)=>{console.log(position)}
    );
    return (
    <div>
        Hii There
    </div>
    );
}
ReactDom(<App/>,document.getElementById('root'));