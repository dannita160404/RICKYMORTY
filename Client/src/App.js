import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/Navbar.jsx"
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './views/About.jsx';
import Detail from "./views/Detail.jsx"
import { useLocation } from 'react-router-dom';
import Form from './components/Form.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/favorites.jsx';


function App() {
  

   const[character, setCharacters] = useState([])
   const {pathname} = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const email = "sofia@mail.com"
   const password = "espiritusanto7"

   //____________LOGIN CON FUNCION_______________--
   // const login = (useData) => {
   //    if(useData.email === email && useData.password === password){
   //    setAccess(true)
   // navigate("/home")
   //    } else{
   //       alert("Usuario o Contraseña incorrectos")
   //    }
   // }



  // _____________LOGIN CON PROMESAS_______________

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   //_____________LOGIN CON ASYNC AWAIT__________________

   async function login(userData) {
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{

         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)

         setAccess(data);
         access && navigate('/home');

      }catch(error){
         window.alert("Los datos son incorrectos")
      }
   }
   
   
   //______________________PROMESAS___________________
      // function onSearch(id) {
      //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      //       if (data.name) {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       } else {
      //          window.alert('¡No hay personajes con este ID!');
      //       }
      //    });
      // }

   async function onSearch (id) {

         try{
            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if(data.name){
               setCharacters((oldChars) => [...oldChars, data]);
            }

         }catch(error){
            window.alert("No hay personajes con ese ID")

         }
      }

      




      const onclose = (id) => {
         setCharacters(
            character.filter((char) => {
               return char.id !==  Number(id)
            })
         )

      }


      useEffect(() => {
         !access && navigate('/');
      }, [access]);
   
   return (
      <div className='App'>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path='/' element ={<Form login={login}/>}/>
         <Route path={'/home'} element = {<Cards character={character} onclose={onclose}/>} />
         <Route path={'/about'} element = {<About/>}/>
         <Route path={"/detail/:id"} element= {<Detail/>}/>
         <Route path={"/favorites"} element= {<Favorites/>}/>
         <Route path={'/*'} element = {<About/>}/>
         

         </Routes>
      </div>
   );
}

export default App;
