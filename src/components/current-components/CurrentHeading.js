import React from "react";

export const CurrentHeading = ({location, currentTemp})=>{
    return(
        <div id="current-heading">
            <p id="location">{location}</p>
            <h1 id="current-temp">{currentTemp}°C</h1>
        </div>
    )
}