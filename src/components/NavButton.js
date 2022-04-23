import React from "react";
import { Link } from "react-router-dom";

function NavButton({name, link}) {
    return (
        <div className="nav-item">
            <Link 
            className="nav-link"
            to={link}>
                {name}
            </Link>
        </div>);
}

export default NavButton;