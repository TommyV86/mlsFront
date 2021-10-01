import React from 'react';
import { Link } from 'react-router-dom';
import { Example } from './dropDown';


export const Header = () => {

  const user = JSON.parse(sessionStorage.getItem('user'))

  let isConnected = user ? <p className="u-connected">Welcome {user.dbUserName} ! </p> : null

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="entete"> 
            <a href="/"><img className="img-fluid" src="https://cdn.discordapp.com/attachments/460567870900797490/880459652112998431/thumbnail.png" alt="Responsive img"/></a>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><Link className="lien" to="/">Accueil</Link></a>
                          </li>
                          <li className="nav-item">
                          <Example />
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><Link className="lien" to="/">Dictionnaire</Link></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><Link className="lien" to="/forum">Forum</Link></a>
                          </li>
                        </ul>
                    </div>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><Link className="lien" to="/connexion">Connexion</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><Link className="lien" to="/inscription">Inscription</Link></a>
                    </li>
                    <li className="nav-item">
                      <form className="form-inline">
                        {isConnected}
                        <input className ="bar" type="search" placeholder="Rechercher" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Rechercher</button>
                      </form>
                    </li>
                </div>
            </nav>
        </header>
    )
}