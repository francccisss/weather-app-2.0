import React from "react";
import "./NavBar.css"
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const NavBar = ({handleQuery}) =>{

    const inputRef = useRef(null);

    const DISPLAY_LINKS= ROUTES.map((route,i)=>{
        return <li key={i} className="links" ><Link key={i} to={route.path}>{route.pageName}</Link></li>
    })

   return(
    <nav className="h-24 bg-[#2e2e2e] uppercase flex justify-between items-center px-10">
        <h1 id="logo" className="font-bold whitespace-nowrap text-white ">Weather App</h1>
        <form className="w-[500px] mr-20 ml-20" onSubmit={(e)=>{
            e.preventDefault()
            handleQuery(inputRef.current.value)
        }}>
           <input ref={inputRef} className="w-[100%] h-10" type="search"/> 
        </form>
        <ul id="nav-link-list" className="text-[] font-semibold text-white flex gap-x-6">
            {DISPLAY_LINKS} 
            <li className="links"><button>GITHUB</button></li>
        </ul>
    </nav>
   ) 
}