import Card from './Card';
import style from "../estilos/cards.module.css"

export default function Cards({character, onclose}) {
   return (
     <div className={style.contenedor}>
      {character.map(character => 
      <Card 
      key = {character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onclose={onclose}
      />
      )}
   </div>
   )
      };


