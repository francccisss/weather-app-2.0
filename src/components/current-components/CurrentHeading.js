import React from "react";

export const CurrentHeading = ({location,minMax, currentTemp})=>{

    const DISPLAY_MINMAX_TEMP = (<div className="flex gap-x-12">{minMax.map((temp,i)=>{
        return <p key={i} className="current-min-max">{temp}°C</p>
    })}
    </div>)
       return(
        <div id="current-heading">
            <p className="text-2xl" id="location">{location}</p>
            <h1 className="text-9xl" id="current-temp">{currentTemp}°C</h1>
            {DISPLAY_MINMAX_TEMP}
        </div>
    )
}