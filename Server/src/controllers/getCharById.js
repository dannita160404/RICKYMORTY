const axios = require("axios")
const URL = `https://rickandmortyapi.com/api/character/` 

exports.getCharById = async (req,res) => {

  try{
    const {id} = req.params
    const {data} = await axios.get(`${URL}${id}`)

    if(data){
                  let character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                 image: data?.image,
                status: data.status
            }
            res.status(200).json(character)

    } else{
      res.status(404).json({Message: "Not fount"})
      
    }

  }catch(error){
            res.status(500).json({Message: error.message})
         }
  
}













 //___________EXPRESS _____________

// exports.getCharById = (req, res) => {
//     const {id} = req.params
//     axios.get(`${URL}${id}`)
//     .then((response) =>{
//         if(response.data){

//             const dato = response.data

//             let character = {
//                 id: dato.id,
//                 name: dato.name,
//                 gender: dato.gender,
//                 species: dato.species,
//                 origin: dato.origin.name,
//                  image: dato?.image,
//                 status: dato.status
//             }

//             res.status(200).json(character)
//         }
//         else{
//             res.status(404).json({Message: "Not fount"})
//         }

//     })
//     .catch((error)=>{
//         res.status(500).json({Message: error.message})
//     })

// }
 
 
 
 
 
 
 

 
 
 //______WEBSERVER__________________
 
 //const axios = require("axios")
 
 
 //function getCharById (res, id){
  //  axios.get(`https://rickandmortyapi.com/api/character/${id}` )
   // .then((response) =>{

     //   const dato = response.data  //los datos de la app
     //   return{
      //      id: dato.id,
      //      gender: dato.gender,
      //     origin: dato.origin.name,
        //    image: dato?.image,
          //  status: dato.status
    //    }
      
//    })
  //  .then((response) => {  // promesa concatenada este response es el resultado del primer then 
    //    res.writeHead( 200 , {"Content-type": "application/json"})
      //  res.end(JSON.stringify(response))
 //   })
//    .catch((reason) => {
  //      res.writeHead( 500 , {"Content-type": "text/plain"})
  //      res.end(reason.response.data.error)
 //   }) 
// }

//  module.exports = {
//    getCharById
// } 