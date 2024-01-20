const server = require("./app")
const {conn} = require("./DB_connection")
const PORT = 3001;


conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
       console.log('Server raised in port: ' + PORT);
    });
})










//________________________-WEBSERVER____________________________________________

//const { getCharById } = require("./controllers/getCharById")

//http.createServer((req,res) => {
 //   res.setHeader('Access-Control-Allow-Origin', '*');
  //  const {url} = req

  //  if(url.includes("/rickandmorty/character") ){
   //     const id =  Number(url.split("/").pop())
     //   const character = characters.find((char) => char.id === id)
   //     res.writeHead( 200 , {"Content-type": "application/json"})
    //    res.end(JSON.stringify(character))
  //  }

 // if(url.includes("/rickandmorty/character") ){
  //      let dividir = url.split("/")
  //      let id = Number(dividir.pop())
    //     getCharById(res, id)
//  }
  
//}).listen(puerto, "localhost") 


