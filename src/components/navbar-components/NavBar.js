import React from "react";

export const NavBar = () =>{
   return(
    <nav className="h-24 bg-[#2e2e2e] uppercase flex justify-between items-center px-10">
        <h1 className="text-white ">Weather App</h1>
        <ul className="text-white flex gap-x-6">
            <li><button>Home</button></li>
            <li><button>Map</button></li>
            <li><button>GITHUB</button></li>
        </ul>
    </nav>
   ) 
}