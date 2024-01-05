const validadoremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const validadornumero = /\d/ //tenga por lo menos un numero 



const validation = ( userData, errors, setErrors ) => {
    let newErrors = errors
   

 

    if(!userData.email) newErrors.email = "El email es requerido"
    else if (!validadoremail.test(userData.email)) newErrors.email = "el email es invalido"
    else newErrors.email = ""

   
    
      if(!userData.password) newErrors.password = "El password es requerido"
     else if(!validadornumero.test(userData.password)) newErrors.password = "debe tener un numero"
     else newErrors.password = ""



    
    setErrors(newErrors)
}


export default validation