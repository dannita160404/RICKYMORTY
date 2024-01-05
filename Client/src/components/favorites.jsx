import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import style from "../estilos/favorite.module.css"


const Favorites = (props ) => {
    const {myFavorites} = props
    const dispatch = useDispatch()
    const [aux,setAux] = useState(false)

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

   
    return (
        
        <div >
<div className={style.contenedor}>
   <select onChange={handleOrder} className={style.ordenador}>
                <option value="A" className={style.opcion}>Asendente</option>
                <option value="D" className={style.opcion}>Desendente</option>
            </select>

        

        
            <select onChange={handleFilter} className={style.filtro}>
                <option value="Male" className={style.opcion}>Male</option>
                <option value="Female" className={style.opcion}>Female</option>
                <option value="Genderless" className={style.opcion}>Genderless</option>
                <option value="unknown" >unknown</option>
            </select>

            </div>
        
         {myFavorites.map(character => 
         <Card 
         key = {character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character?.origin?.name}
         image={character.image}
        // onclose={onclose}
         />
         )}

       
      </div>

      
      )

}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 
 }
 

export default connect(mapStateToProps,null)(Favorites)