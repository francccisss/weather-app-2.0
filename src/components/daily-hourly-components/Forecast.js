import React from "react";
import { Daily } from "./Daily";
import { DailyCards } from "./DailyCards";
import { Hourly } from "./Hourly";

export const Forecast = ()=>{
    const arr = [1,2,3,4,5,6,7]

    return(<div className="flex bg-white border-2 px-8 py-6 border-black flex-col flex-1">
       <Hourly/> 
    <Daily>
        {arr.map(element=>{
            return <DailyCards key={element} data={element}/>
        })}
    </Daily>
    </div>)
}