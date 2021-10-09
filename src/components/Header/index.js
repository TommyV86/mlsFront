import React from 'react';
import { Example } from './dropDown';


export const Header = () => {

  const user = JSON.parse(sessionStorage.getItem('user'))

  let isConnected = user ? <p className="u-connected">Welcome {user.dbUserName} ! </p> : null

    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="entete">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Accueil</a>
                          </li>
                          <li className="nav-item">
                          <Example />
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">Dictionnaire</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">Forum</a>
                          </li>
                        </ul>
                    </div>

                    <li className="nav-item">
                      <a className="nav-link" href="/Connexion">Connexion</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Inscription">Inscription</a>
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