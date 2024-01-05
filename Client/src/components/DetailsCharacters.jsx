import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import DetailCharacter from "./DetailCharacter"

const DetailsCharacters = ( ) =>{

  const  [Character, setCharacter] = useState({})

  const {id} =useParams()

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
    return(
       <div>
          <DetailCharacter
          name= {Character.name}
          status= {Character.status}
          species= {Character.species}
          gender= {Character.gender}
          origin= {Character.origin}
          image= {Character.image}

          />
       </div> 
    )
}

export default DetailsCharacters