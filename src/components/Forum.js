import React from 'react';
import { Link } from 'react-router-dom';
import mlsAxios from '../mlsAxios';


export const ForumPage = () => {

    mlsAxios.get('forum').then( res => {
        let topic = res.data
        let topicStringified = JSON.stringify(topic)

        localStorage.setItem('topicValues', topicStringified)

        // DEBUG
        console.log("---------------res.data--------------------")
        console.log(topic)
    
    })

    let topicValues = JSON.parse(localStorage.getItem('topicValues'))

    let divTopics = topicValues.map(topicIndex => {
        let url = "/modifierTopic/?idTopic=" + topicIndex._id
        return(

            <div className="card border-warning mb-4">
                <div className="row">
                    <div className="card-header col-4">Nom du sujet datant du : {topicIndex.date_topic}</div>
                    <div className="card-header col-4">Description</div>
                    <div className="card-header col-2">Posts</div>
                    <div className="card-header col-2">Vues</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-text col-4">{topicIndex.nom}</h5>
                        <p className="card-text col-4">{topicIndex.texte_topic}</p>
                        <p className="card-text col-2">Nombre de posts</p>
                        <p className="card-text col-2">Nombre de vues</p>
                        <button className="btn btn-dark"><Link className="lien" to={url}> Modifier le topic </Link></button>
                    </div>
                </div>
            </div>
        )   
    })

    return(
        
        <div className="mainForum">
            <div className="container">
                <div className="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Langage
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Techno
                        </label>
                    </div><hr/><br/>

                    <div className="newTopic">
                        <div className="container">
                            <button className="btn btn-dark "><Link className="lien" to="/CreerTopic">Créer un topic</Link></button>
                        </div>
                    </div>

                    <br/>
                    <br/>
                                  
                    {divTopics}

                </div>
            </div>
        </div>
    )
}