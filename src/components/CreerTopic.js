import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { TextFieldTopic } from './TextFieldTopic';
import  mlsAxios  from '../mlsAxios';

const createTopic = (values) => {
    mlsAxios.post('create', values).then(res => {
        console.log(res)
        console.log('Topic inséré')
    })
}

export const CreerTopic = () => {
    const day = new Date(Date.now() -86400000);
    const validate = Yup.object({
        nom: Yup.string()
        .max(15, 'Limitation à 15 caractères')
        .required('Obligatoire'),
        texte_topic: Yup.string()
        .max(400, 'Limitation à 400 charactères')
        .required('Obligatoire'),
        date_topic: Yup.date().required('Champs requis')
        .max(Date().toLocaleString(), " La date ne peut être supérieur à la date d'aujourd'hui!")
        .min(day, "La date ne peut être inférieure à la date d'aujourd'hui")
    })
    return (
        <div class='container'>
            <Formik
                initialValues={{
                    nom: '',
                    texte_topic: '',
                    date_topic: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    createTopic(values)
                    console.log(values)
                }}
            >
                
                <div>
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Créer un nouveau topic</h1>
                            <TextField label="Titre" name="nom" type="text" />
                            <br/>
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                </div>
                            </div>
                            <TextField type="date" name="date_topic"/>
                            <br/>
                            <TextFieldTopic label="Description" name="texte_topic" type="text" placerholder="Décrire votre sujet..."/>
                            
                            <button className="btn btn-dark mt-3" type="submit">Valider le topic</button>
                        </div>
                    </Form>
                </div>
                
            </Formik>
        </div>
    )
}