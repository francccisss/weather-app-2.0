import React from "react";
import "./NavBar.css"

export const NavBar = () =>{
   return(
    <nav className="h-24 bg-[#2e2e2e] uppercase flex justify-between items-center px-10">
        <h1 id="logo" className="font-bold whitespace-nowrap text-white ">Weather App</h1>
        <form className="w-[500px] mr-20 ml-20" onSubmit={(e)=>{
            e.preventDefault()
        }}>
           <input className="w-[100%] h-10" type="search"/> 
        </form>
        <ul id="nav-link-list" className="text-[] font-semibold text-white flex gap-x-6">
            <li className="links"><button>Home</button></li>
            <li className="links"><button>Map</button></li>
            <li className="links"><button>GITHUB</button></li>
        </ul>
    </nav>
   ) 
}