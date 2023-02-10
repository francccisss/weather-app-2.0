import React from "react";
import "./dailyCards.css"
         
export const DailyCards = ({data})=>{
    return<div className="daily-cards flex-1 flex bg-[#c4d1eb] border-2 border-black justify-center items-center"> 
    Card {data}
    </div>
}        
