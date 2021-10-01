import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextFieldReponse } from './TextFieldReponse';
import * as Yup from 'yup';
import mlsAxios from './../mlsAxios'

const modifReponse = (values) => {
    mlsAxios.put('reponseModif', values).then(res => {
        console.log(res)
        console.log('reponse modifier inserted')
    })
}

export const ModifierReponse = () => {
    // const yesterday = new Date(Date.now() -86400000);
    const validate = Yup.object({
        texte_reponse: Yup.string()
        .max(1000, 'Limitation à 1000 charactères')
        .required('Veuillez remplir ce champ pour répondre au topic ci-dessus'),
        date_reponse: Yup.date().required("Champs requis")
        .max(Date().toLocaleString(), "la date ne peut pas être supérieure à la date d'aujourd'hui!")
        // .min(yesterday, "la date ne peut pas être inférieure à la date d'aujourd'hui!")
    })
    return (
        <div className='container'>
            <Formik
                initialValues={{
                    texte_reponse: '',
                    // image_reponse: '',
                    date_reponse: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    modifReponse(values)
                    console.log(values)
                }}
            >
                <div>
                    
                    <Form>
                        <div className="container">
                            <h1 className="my-4 font-weight-bold-display-4">Modifier la réponse sélectionné</h1>
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