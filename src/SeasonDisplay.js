import React from 'react';
import './SeasonDisplay.css'
const Season=(latitude,month)=>{
    if(month>2 && month<9){
        if(latitude>0){
            //notheren hamisphere
            return "Summer"
        }
        else{
            //southern hemisphere
            return "Winter"
        }
    }
    else{
        if(latitude>0){
            //notheren hamisphere
            return "Winter"
        }
        else{
            //southern hemisphere
            return "Summer"
        }
    }
}
const DisplaySeason=(props)=>{
    const season = Season(props.latitude,new Date().getMonth());
    const text = season === "Winter"?"It's Chilly Cold":"Let's Hit The Beach";
    const seasonIcon = season === "Winter"?"snowflake":"sun";
    return( 
        <div className={`main-div ${season}`}>
            <i className={`${seasonIcon} loading massive icon left-icon`}></i>
            <h1>{text}</h1>
            <i className={`${seasonIcon} loading massive icon right-icon`}></i>
        </div>
    );
}

export default DisplaySeason;