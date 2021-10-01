import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import mlsAxios from '../mlsAxios';


export const Login = () => {
    
    let connectedUser = ""
    const getDataUser = (values) => {

        mlsAxios.post('connexion', values).then( res => {
            console.log(" * données de l'user dans la bdd récupereés via json * ")
            console.log(res.data)
            connectedUser = res.data
            console.log("user : " + connectedUser.dbUserName)
            sessionStorage.setItem('user', JSON.stringify(connectedUser))
        })
    }

    const validate = Yup.object({
        email: Yup.string()
        .email('Adresse-mail non valide')
        .required('adresse-mail obligatoire'),
        password: Yup.string()
        .min(5, 'Minimum 5 charactères')
        .required('Mot de passe obligatoire'),
    })

    return (
        <div class='container'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    getDataUser(values)
                    console.log(" * valeurs de l'user validées par formik dans le formulaire * ")
                    console.log(values)
                }}
            >
                
                <div>
                    
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Connexion</h1>
                            <TextField label="Adresse-mail" name="email" type="email" />
                            <TextField label="Mot de passe" name="password" type="password" />
                            <button className="btn btn-success mt-3 ml-3" type="submit">Connexion</button>
                            <button className="btn btn-danger mt-3 ml-3"><Link className="lien" to="/password">Mot de passe oublié</Link></button>
                        </div>
                    </Form>

                </div>
                
            </Formik>
        </div>
    )
}