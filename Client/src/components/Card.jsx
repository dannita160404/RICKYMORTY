import style from "../estilos/card.module.css"
import { Link } from "react-router-dom";
import { addFav } from "../redux/actions";
import { removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

 function Card({ id,name, status, species, gender,origin,image,onclose, addFav, removeFav,myFavorites}) {
   const [isFav, setIsFav] = useState(false)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
        isFav ? removeFav(id) : addFav( {id,name, status, species, gender,origin,image,onclose});
        setIsFav(!isFav)
   }
   return (
      <div className={style.contenedor}>
         <section className={style.contenedorImagen}>
         <img className={style.imagen} src={image} alt={`No se encuenta la imagen de ${name}`} />
        
         </section>
         <div className={style.contendorletras}>
            <Link to ={`/detail/${id}`} >
         <h2 className={style.nombre}> {name} </h2>
         </Link>
         <h2 className={style.status}><span>Status:</span> {status} </h2>
         <h2 className={style.species}><span>Specie:</span>{species} </h2>
         <h2 className={style.gender}><span>Gender:</span> {gender} </h2>
         <h2 className={style.origin}><span>Origin: </span>{origin} </h2>
         </div> 
         <div className={style.contenedorbotones}>
         {
   isFav ? (
      <button className={style.botonfavo} onClick={handleFavorite}>💚</button>
   ) : (
      <button className={style.botonfavo} onClick={handleFavorite}>🖤</button>
   )
}
         <button onClick={ () => onclose(id)} className={style.boton}>❎</button>
         </div>
         

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {
         dispatch(addFav(character))
      },
   removeFav: (id) => {
   dispatch(removeFav(id))
   }

   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
