import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextFieldTopic } from './TextFieldTopic';
import  mlsAxios  from '../mlsAxios';

// Stocker le token pour se servir de référence pour le topicText


export const ModifierTopic = (props) => {
    // utilisation du props pour la récupération de l'id 
    // dans l'url à partir du param props via 
    // location pour la localisation, search pour la recup grace 
    // au ?query param dans l'url du component Forum et split qui 
    // convertit en array et coupe la partie où y'a l'id
    let id = props.location.search.split("=")[1]

    const topicTextUpdated = (values) => {
        mlsAxios.put('modifierTopic/' + id, values)
    }

    const validate = Yup.object({
        texte_topic: Yup.string()
        .max(400, 'Limitation à 400 charactères')
        .required('Obligatoire')
    })
    return (
        <div class='container'>
            <Formik
                initialValues={{
                    texte_topic: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    topicTextUpdated(values)
                    console.log(values)
                }}
            >
                <div>
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Modifier le topic</h1>
                            <br/>

                            <TextFieldTopic label="Description" name="texte_topic" type="text" placeholder="modifier votre sujet..."/>
                            
                            <button className="btn btn-dark mt-3" type="submit">Valider les modifications</button>
                        </div>
                    </Form>
                </div>
                
            </Formik>
        </div>
    )
}