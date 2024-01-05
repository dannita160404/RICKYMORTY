import axios from "axios";
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

//____________ADD NORMAL______________
// export const addFav = (character) =>{
//     return {
//         type: ADD_FAV,
//         playload: character

//     }
// }

//__________________ADD CON EXPRESS____________________

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };  


//__________________ADD CON ASYNC AWAIT_____________
 export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try{
      return async (dispatch) =>{
      const {data} = await axios.post(endpoint,character)
      return dispatch({
           type: ADD_FAV,
          payload: data,
      });
      }
   }catch(error){
      console.log(error)

   }
 }





//______________________REMOVE NORMAL______________


// export const removeFav = (id) =>{
//     return {
//         type: REMOVE_FAV,
//         playload: id

//     }
// }

//______________________REMOVE CON EXPRESS__________________

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };





//_______________________REMOVE CON ASYNC AWAIT______________________

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   try{
      return async (dispatch) =>{
      const {data} = await axios.delete(endpoint)
      return dispatch({
           type: REMOVE_FAV,
          payload: data,
      });
      }
   }catch(error){
      console.log(error)

   }
 }




export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) =>{
    return{
        type: ORDER,
        payload: order
    }
}