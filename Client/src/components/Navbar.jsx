
import React from "react";
import SearchBar from "./SearchBar";
import style from "../estilos/navbar.module.css"
import { Link } from "react-router-dom";

export default  function Nav(props){
    const {onSearch} = props
    return(
        <div className={style.contenerdr}>
            <nav className={style.contendorlink}>
                
           <Link to = "/about" className={style.link1}>About</Link>
           <Link to = "/home" className={style.link1}>Home</Link>
         
           <Link to = "/favorites" className={style.link1}>Favoritos</Link>
           
           </nav>


            <div>
            <SearchBar onSearch={onSearch}/>
            </div>
    </div>
    )
}