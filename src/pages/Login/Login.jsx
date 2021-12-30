import LoginForm  from '../../components/Login/LoginForm'
import { Formik } from 'formik'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/Context'
/* import axios from 'axios'; */

export default function Login () {
    const navigate = useNavigate()
    const [emptyInputs, setEmptyInputs] = useState(false)
    const [wrongLogin, setWrongLogin] = useState(false)

    const { loggedIn, setLoggedIn } = useAppContext()
  
        useEffect(() => {  
            if (loggedIn === true ) {
            navigate('/home') 
            }
    }, [loggedIn])
   
    

    const handleOnSubmit =(e) => {
        
      /*   const data = {
            email: e.email,
            password: e.password
        }
        axios.post('http://localhost:3000/', data)
        .then(res=> console.log(res)) 
        .catch(err=>console.log(err)) */

         if (e.password === "react" && e.email === "challenge@alkemy.org") {
            window.sessionStorage.setItem("loggedIn", true);
            setLoggedIn(true)
            setWrongLogin(false)
            
        }else{
            window.sessionStorage.setItem("loggedIn", false) 
            setWrongLogin(true)
        }
        
    
    }
    return (
        <div className="container-fluid App">
            <div className="container">
                <div className="loginContainer">
                    <Formik 
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{
                            password: "",
                            email: ""
                        }}
                        validate={(value) => {
                            if (!value.email || !value.password) {
                                setEmptyInputs(true)
                            } else {
                                setEmptyInputs(false)
                            }
                            return emptyInputs
                        }
                        }
                        onSubmit={ (e ) => 
                            //Llamada a API. Conectarse y enviar valores
                            handleOnSubmit(e)
                        }>
                        {({handleSubmit, values, handleChange,})=> (
                        
                        <LoginForm handleSubmit={handleSubmit} values={values} handleChange={handleChange}  /> 
                        )}
                    </Formik>
                    {
                        emptyInputs ? <div className="errorsContainer">Please enter a valid email and password</div> : 
                        wrongLogin && <div className="errorsContainer">Incorrect user or password</div>
                    }
                    
                </div>
            </div>
        </div>
    )
    
}
