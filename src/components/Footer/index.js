import React from 'react'
// import { NavLink, Link } from 'react-router-dom';


export const Footer = () => {
    return (
    <footer class="footer-bs bg-dark">
        <div class="row">
        	<div class="col-md-3 footer-brand">
                <h2>MyLittleStack</h2>
                <p>Anim mollit laboris sit dolor commodo proident. Pariatur tempor dolore esse tempor esse enim in velit minim ut sit do incididunt aute. Consectetur do sit in irure. Ullamco amet officia laboris veniam consectetur magna minim aute anim. Cupidatat nostrud quis ad dolor </p>
                <p>© 2021 All rights reserved</p>
            </div>
        	<div class="col-md-4 footer-nav">
            	<h4>Fonctionnalité —</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="/">Fonctionnalité</a></li>
                        <li><a href="/">Fonctionnalité</a></li>
                        <li><a href="/">Fonctionnalité</a></li>
                        <li><a href="/">Chocolatine</a></li>
                        <li><a href="/">Fonctionnalité</a></li>
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