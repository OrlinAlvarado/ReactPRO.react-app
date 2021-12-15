import { MyTextInput } from '../components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'

import '../styles/styles.css'

export const RegisterFormikPage = () => {
    
      
    return (
        <div>
            <h1>Register page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values ) => {
                    console.log( values );
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                    .min(2, 'Ingrese 2 caracteres o mas')
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Ingrese un email valido')
                                    .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Ingrese minimo 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                    .required('Requerido')
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput 
                                label="Nombre" 
                                name="name"
                                placeholder="Orlin Alvarado"
                            />
                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                type="email"
                                placeholder="orlin@prueba.com"
                            />
                            <MyTextInput 
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="******"
                            />
                            <MyTextInput 
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="******"
                            />
                        
                            
                            <button type="submit">Submit</button>
                            <button type="button" onClick={ handleReset }>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
