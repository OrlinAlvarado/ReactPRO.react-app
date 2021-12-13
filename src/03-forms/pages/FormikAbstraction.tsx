import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import '../styles/styles.css';

export const FormikAbstraction = () => {
    
    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => {
                    console.log( values );
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Ingrese un email valido')
                                    .required('Requerido'),
                    terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-Junior'], 'Esta opción no es permitida')
                                    .required('Requerido')
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput 
                                label="FirstName" 
                                name="firstName"
                                placeholder="Orlin"
                            />
                            <MyTextInput 
                                label="lastName" 
                                name="lastName"
                                placeholder="Alvarado"
                            />
                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="prueba@prueba.com"
                            />
                        
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-Junior">IT Junior</option>
                            </MySelect>
                            
                            <MyCheckbox label="Terms & Conditions" name="terms" />
                            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
           
        </div>
    )
}
