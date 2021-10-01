import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    

    return (
        <div className="Navigation">
            
            <NavLink exact to ="Signup">
                Inscription
            </NavLink>
            <NavLink exact to ="Login">
                Connexion
            </NavLink>
        </div>
    );
};

export default Navigation;