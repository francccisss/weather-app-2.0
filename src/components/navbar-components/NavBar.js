import React from "react";
import "./NavBar.css"

export const NavBar = () =>{
   return(
    <nav className="h-24 bg-[#2e2e2e] uppercase flex justify-between items-center px-10">
        <h1 className="text-xl text-white ">Weather App</h1>
        <ul id="nav-link-list" className="text-white flex gap-x-6">
            <li className="links"><button>Home</button></li>
            <li className="links"><button>Map</button></li>
            <li className="links"><button>GITHUB</button></li>
        </ul>
    </nav>
   ) 
}