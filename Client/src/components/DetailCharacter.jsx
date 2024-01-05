import style from "../estilos/detail.module.css"
 const DetailCharacter = ({name, status, species, gender,origin,image }) =>{
    return(
        <div className = {style.contenedor}>
        <div className={style.contenedorimagen}>
            <img src={image} className = {style.imagen}/>
            </div>
            <div className={style.contenedorletras}>
            <h2 className={style.name}>{name}</h2>
            <h3 className = {style.status}>STATUIS ║ <span className={style.span}>{status}</span> </h3>
            <h3 className = {style.specie}>SPECIE ║ <span className={style.span}>{species}</span> </h3>
            <h3 className = {style.gener}>GENER ║ <span className={style.span}>{gender} </span> </h3>
            <h3 className = {style.origin}> ORIGIN ║ <span className={style.span}>{origin}</span> </h3>
            </div>

            
        </div>
    )
}

export default DetailCharacter