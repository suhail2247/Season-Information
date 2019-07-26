import React from 'react';

const Season=(latitude,month)=>{
    if(month>2 && month<9){
        if(lat>0){
            //notheren hamisphere
            return "Summer"
        }
        else{
            //southern hemisphere
            return "Winter"
        }
    }
    else{
        if(lat>0){
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
    const seson=Season(props.latitude,new Date().getMonth());
    const text = season === "Winter"?"It's To Cold":"It's To Hot";
    return <div>{text}</div>
}

export default DisplaySeason;