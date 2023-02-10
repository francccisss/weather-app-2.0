import React from "react";

export const Current =({children}) =>{

    return(
        <div className="text-[#2e2e2e] flex flex-col items-start w-1/3" id="current-container">
            {children}
            <div className="flex-1 py-12 font-light flex flex-col justify-between text-3xl" id="current-description">
                <p>Today's weather conditions and forecast for Charlotte, NC.</p>
                <p>Percipitation: 0%</p>
                <p>Wind: 15mph</p>
                <p>Humidity: 54%</p>
            </div>
        </div>
    )
}