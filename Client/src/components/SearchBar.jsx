import style from "../estilos/searchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [id, setid] = useState("")

const handleChange = (event) => {

   setid(event.target.value)

}
   const {onSearch} = props;
   
   
   return (
      <div>
      <div className={style.contenedor}>
         <input value={id} onChange={handleChange} type='search' className={style.input} />
         <button onClick={() => onSearch(id)} className={style.boton}>Agregar</button> 
      </div>
      </div>
   );
}
