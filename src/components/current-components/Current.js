import React from "react";

export const Current =({children}) =>{

    return(
        <div className="flex flex-col items-start w-1/3" id="current-container">
            {children}
            <div id="current-description">
                <p>Today's weather conditions and forecast for Charlotte, NC.</p>
                <p>Percipitation: 0%</p>
                <p>Wind: 15mph</p>
                <p>Humidity: 54%</p>
            </div>
        </div>
    )
}