import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import mlsAxios from '../mlsAxios';


// fonction contenant la récupération de la fonction signup au backend via axios 
const sign = (values) => {
    mlsAxios.post('signup', values)
}

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Limitation à 15 charactères')
        .required('Obligatoire'),
        lastName: Yup.string()
        .max(20, 'Limitation à 20 characères')
        .required('Obligatoire'),
        email: Yup.string()
        .email('Adresse-mail non valide')
        .required('adresse-mail obligatoire'),
        password: Yup.string()
        .min(5, 'Minimum 5 charactères')
        .required('Mot de passe obligatoire'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
        .required('Confirme mot de passe obligatoire')

    })
    return (
        <div class='container'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    sign(values)
                    console.log(" *** values validated by formik inserted ***")
                    console.log(values)
                }}
            >

                
                <div>
                    
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Inscription</h1>
                            <TextField label="Prénom" name="firstName" type="text" />
                            <TextField label="Nom" name="lastName" type="text" />
                            <TextField label="Adresse-mail" name="email" type="email" />
                            <TextField label="Mot de passe" name="password" type="password" />
                            <TextField label="Confirmer mot de passe" name="confirmPassword" type="password" />
                            <button className="btn btn-dark mt-3" type="submit">S'inscrire</button>
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Réinitialiser</button>
                        </div>
                    </Form>
                    
                </div>
                

            </Formik>
        </div>
    )
}