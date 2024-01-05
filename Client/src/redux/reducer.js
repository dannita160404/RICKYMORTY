  import { ADD_FAV, FILTER, ORDER } from "./actions"
  import { REMOVE_FAV } from "./actions"
  
  
  const initialState = {
    myFavorites: [],
    allCharacters: []
}
const rootReducer = (state = initialState, action )=> {
     switch(action.type){
       
        case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload};

        // case REMOVE_FAV :
        //     let copy2 = state.myFavorites.filter((char)=>{
        //     return char.id !== Number( action.playload)
        //     })
        //     return{
        //         ...state,
        //         myFavorites: copy2
        //     }

        case REMOVE_FAV:
            return { ...state, myFavorites:action.payload};

            case FILTER:
                let copy3 = state.allCharacters.filter((char) => {
                  return char.gender === action.payload
                })
                return{
                    ...state,
                    myFavorites:copy3
                }

            case ORDER: 
            let orderedCHaracter;
            if(action.payload === "A"){
                orderedCHaracter = state.allCharacters.sort((a,d) => a.id - d.id )
               
            }
            else{
                orderedCHaracter =  state.allCharacters.sort((a,d) => d.id - a.id)               }

            return{
                ...state,
                myFavorites: orderedCHaracter
            
            }

        default:
          return{
            ...state
        }
     }
}
export default rootReducer