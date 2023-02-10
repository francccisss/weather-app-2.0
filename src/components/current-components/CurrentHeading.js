import React from "react";

export const CurrentHeading = ({location, currentTemp})=>{
    return(
        <div id="current-heading">
            <p className="text-2xl" id="location">{location}</p>
            <h1 className="text-9xl" id="current-temp">{currentTemp}°C</h1>
        </div>
    )
}