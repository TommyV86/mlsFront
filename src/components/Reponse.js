import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextFieldReponse } from './TextFieldReponse';
// import { TextField } from './TextField';
import * as Yup from 'yup';
import mlsAxios from './../mlsAxios'

const createReponse = (values) => {
    mlsAxios.post('reponseCreate', values).then(res => {
        console.log(res)
        console.log('reponse inserted')
    })
}

export const Reponse = () => {
    const yesterday = new Date(Date.now() -86400000);
    const validate = Yup.object({
        texte_reponse: Yup.string()
        .max(1000, 'Limitation à 1000 charactères')
        .required('Veuillez remplir ce champ pour répondre au topic ci-dessus'),
        date_reponse: Yup.date().required("Champs requis")
        .max(Date().toLocaleString(), "la date ne peut pas être supérieure à la date d'aujourd'hui!")
        .min(yesterday, "la date ne peut pas être inférieure à la date d'aujourd'hui!")
    })
    return (
        
        <div className='container'>
            <h1 className="my-4 font-weight-bold-display-4">Répondre à ce topic</h1>
                <div className="mainForum">
                    <div className="card border-warning mb-3" >
                        <div className="row">
                            <div className="card-header col-4">Nom du sujet numéro 1</div>
                            <div className="card-header col-4">Description du topic</div>
                            <div className="card-header col-2">Posts</div>
                            <div className="card-header col-2">Vues</div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <h4 className="card-title">Titre du topic</h4>
                                <p className="card-text col-4">Topic créer par (utilisateur)</p>
                                <p className="card-text col-4">lorem où t'es</p>
                                <p className="card-text col-2">Nombre de posts</p>
                                <p className="card-text col-2">Nombre de vues</p>
                            </div>
                        </div>
                    </div>
                </div>

            <Formik
                initialValues={{
                    texte_reponse: '',
                    // image_reponse: '',
                    date_reponse: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    createReponse(values)
                    console.log(values)
                }}
            >
                <div>
                    
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Envoyer une réponse au topic sélectionné</h1>
                            {/* <input type="file" class="form-control-file" name="image_Reponse"></input> */}
                            <Field type="date" name="date_reponse"/>
                            <TextFieldReponse name="texte_reponse" type="text" placeholder="Taper votre réponse"/>
                            <button className="btn btn-dark mt-3" type="submit">Envoyer</button>
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Réinitialiser</button>
                        </div>
                    </Form>
                    
                </div>
                    
            </Formik>
        </div>
    )
}