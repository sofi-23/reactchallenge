import LoginForm  from '../components/Login/LoginForm'
import { Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login () {
    const navigate = useNavigate()
    const [emptyInputs, setEmptyInputs] = useState(false)
    const [wrongLogin, setWrongLogin] = useState(false)

    const handleOnSubmit =(e) => {
        if (e.password === "react" && e.email === "challenge@alkemy.org") {
            window.sessionStorage.setItem("loggedIn", true);
            setWrongLogin(false)
            navigate("/home")
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
