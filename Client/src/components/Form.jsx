  import { useState } from "react"
  import validation from "./validation"
  import style from "../estilos/form.module.css"
  
  export default function Form({login}){ 

    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })   
    
    const [errors, setErrors] = useState({})

    const handleChange = (event) =>{
        let value = event.target.value
        let property = event.target.name
        setuserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors,setErrors)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    return(
        <div className={style.contenedorprinci}>
        <div className={style.contenedor}>
            <form onSubmit={handleSubmit} className={style.contenedor1}>
                <div  className={style.contenedorimagen}>
                    <img src="fotoformulario.png" alt="" />
                </div>
                <div className={style.contenedorlabel1}>
                <div className={style.contenedorlabel}>
                <label className={style.label} >Email</label>
                <input type="text" name="email" value={userData?.email} onChange={handleChange} className={style.input}/>
                </div>
                
              {  errors.email && <p className={style.mensajes}>{errors.email}</p>}
              <div className={style.contenedorlabel}>
                <label className={style.label}>Password</label>
                <input type="password" name="password" value={userData?.password} onChange={handleChange} className={style.input}/>
                </div>
                
                <p  className={style.mensajes}>{errors.password}</p>
                <button className={style.boton}>SUBMIT</button>
                </div>
            </form>
        </div>
        </div>
    )
}