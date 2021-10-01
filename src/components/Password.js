import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import mlsAxios from '../mlsAxios';

const redirMail = (value) => {
    mlsAxios.post('password', value)
}

export const Password = () => {
    const validate = Yup.object({
        email: Yup.string()
        .email('Adresse-mail non valide')
        .required('adresse-mail obligatoire'),
    })
    return (
        <div>
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={validate}
                onSubmit={value => {
                    console.log(" *** email validated by formik sended ***")
                    redirMail(value)
                    console.log(value)
                }}
            >
                <div>
                    
                    <Form>
                        <div className="container">
                        <h1 className="my-4 font-weight-bold-display-4">Mot de passe oublié ?</h1>
                            <TextField label="Entrez votre adresse-mail pour changer votre mot de passe" name="email" type="email" />
                            <button className="btn btn-success mt-3 ml-3" type="submit">Envoyer</button>
                        </div>
                    </Form>
                    
                </div>

            </Formik>
        </div>
    )
}