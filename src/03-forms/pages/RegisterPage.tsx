import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {
    
   const { 
        formData, onChange, resetForm,isValidEmail,
       name, email, password1, password2 
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log(formData);
    }
    
    return (
        <div>
            <h1>Register page</h1>
            <form noValidate onSubmit={ (event) => onSubmit(event) }>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={ name }
                    onChange={ onChange }
                    name="name"
                    className={ `${ name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                
                <input 
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                    name="email"
                    className={ `${ !isValidEmail(email) && 'has-error' }`}
                />
                { !isValidEmail(email) && <span>Email no es válido</span> }
                
                <input 
                    type="password" 
                    placeholder="Password"
                    value={ password1 }
                    onChange={ onChange }
                    name="password1"
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>Debe ingresar mas de 6 letras</span> }
                <input 
                    type="password" 
                    placeholder="Repeat Password"
                    value={ password2 }
                    onChange={ onChange }
                    name="password2"
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }
                
                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset Form</button>
            </form>
        </div>
    )
}
