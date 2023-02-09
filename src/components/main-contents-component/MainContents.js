import React from "react";
import "./MainContents.css"

export const MainContents = ({children})=>{
    return (
      <div id="main-contents" className="flex-1">
        {children}
      </div>
    )

}