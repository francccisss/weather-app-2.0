import React from "react";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";

export const Forecast = ()=>{
    return(<div className="flex-1">
       <Hourly/> 
       <Daily/>
    </div>)
}