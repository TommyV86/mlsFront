import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import mlsAxios from '../mlsAxios';

// let regX = /(id=)([a-z0-9]+)/

export const NewPassword = (props) => {
    // utilisation du props pour la récupération du token 
    // dans l'url à partir du param props via 
    // location pour la localisation, search pour la recup grace 
    // au ?query param dans l'url du mail au back et split qui 
    // convertit en array pour couper la partie où y'a le token
    let token = props.location.search.split("=")[1]

    const newMdp = (values) => {
        mlsAxios.put('newPassword/' + token, values)
    }

    // création d'un objet validate via yup pour la validation dans formik
    const validate = Yup.object({
        password: Yup.string()
        .min(5, 'Minimum 5 charactères'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
        .required('Confirmation de mot de passe obligatoire')
    })

    return (
        <div>
            <Formik
                initialValues={{
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(" *** new password validated by formik updated *** ")
                    newMdp(values)
                    console.log(values)
                }}
            >
                <div>
                    
                    <Form>
                        <div className="container">
                            <h4 className="my-4 font-weight-bold-display-4">Entrez un nouveau mot de passe</h4>
                            <TextField name="password" type="password" />
                            <h4 className="my-4 font-weight-bold-display-4">Confirmez le nouveau mot de passe</h4>
                            <TextField name="confirmPassword" type="password" />
                            <button className="btn btn-success mt-3 ml-3" type="submit">Envoyer</button>
                        </div>
                    </Form>

                </div>
                
            </Formik>
        </div>
    )
}