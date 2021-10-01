import React from 'react'
// import { NavLink, Link } from 'react-router-dom';


export const Footer = () => {
    return (
    <footer class="footer-bs bg-dark">
        <div class="row">
        	<div class="col-md-3 footer-brand">
            	<h2> <a href="/"><img className="img-fluid" src="https://cdn.discordapp.com/attachments/460567870900797490/880459652112998431/thumbnail.png" alt="Responsive imag"/></a></h2>
                <p>Ouais ici tu donnes des infos sur insy2s, genre Nizar il est grave chaud et la team MLS est formée de beaux gosses, ce genre d'infos la quoi.</p>
                <p>© 2021 Les céréales avant le lait</p>
            </div>
        	<div class="col-md-4 footer-nav">
            	<h4>Fonctionnalité —</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="#">Fonctionnalité</a></li>
                        <li><a href="#">Fonctionnalité</a></li>
                        <li><a href="#">Fonctionnalité</a></li>
                        <li><a href="#">Chocolatine</a></li>
                        <li><a href="#">Fonctionnalité</a></li>
                    </ul>
                </div>
            </div>
        	<div class="col-md-4 footer-social">
            	<h4>Contactez nous</h4>
            	<div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Votre nom" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                    <textarea class="form-control" aria-label="With textarea" placeholder="Votre Message"></textarea>
                </div>
        </div>
        </footer>
    )
}